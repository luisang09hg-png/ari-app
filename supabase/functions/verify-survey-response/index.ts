import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { surveyData } = await req.json()
    const turnstileToken = surveyData?.turnstile_token

    if (!turnstileToken || turnstileToken === 'no-token') {
      return new Response(JSON.stringify({ error: 'Falta el token de verificación (Turnstile)' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    // Validate Turnstile Token
    const secretKey = Deno.env.get('TURNSTILE_SECRET_KEY')
    if (!secretKey) {
      throw new Error('TURNSTILE_SECRET_KEY is not set in the environment variables')
    }

    const formData = new FormData()
    formData.append('secret', secretKey)
    formData.append('response', turnstileToken)

    const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: formData
    })
    const turnstileData = await turnstileRes.json()

    if (!turnstileData.success) {
      console.error('Turnstile verification failed:', turnstileData)
      return new Response(JSON.stringify({ error: 'Verificación de seguridad fallida', details: turnstileData['error-codes'] }), {
        status: 403,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    // Create Supabase admin client to bypass RLS
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Optional: Extract User ID from Authorization header if logged in
    const authHeader = req.headers.get('Authorization')
    let userId = null
    if (authHeader) {
      // Create a user client just to verify the token
      const supabaseUserClient = createClient(
        Deno.env.get('SUPABASE_URL') ?? '',
        Deno.env.get('SUPABASE_ANON_KEY') ?? '',
        { global: { headers: { Authorization: authHeader } } }
      )
      const { data: { user } } = await supabaseUserClient.auth.getUser()
      if (user) {
        userId = user.id
      }
    }

    // Construct the payload to insert
    const payload = {
      user_id:             userId,
      rating_stars:        surveyData.rating_stars        ?? null,
      productos_coinciden: surveyData.productos_coinciden ?? null,
      volveria_usar:       surveyData.volveria_usar       ?? null,
      mas_util:            surveyData.mas_util            ?? null,
      mejorar:             surveyData.mejorar             ?? null,
      comment:             surveyData.comment             || null,
      diagnosis_snapshot:  surveyData.diagnosis_snapshot  || null,
      turnstile_token:     'verified',
    }

    // Insert into survey_responses
    const { error: insertError } = await supabaseAdmin
      .from('survey_responses')
      .insert(payload)

    if (insertError) {
      throw insertError
    }

    return new Response(JSON.stringify({ success: true, message: 'Encuesta guardada y validada exitosamente' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })

  } catch (error: any) {
    console.error('Error procesando encuesta:', error)
    return new Response(JSON.stringify({ error: 'Error interno del servidor', details: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})
