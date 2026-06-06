import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // ── Auth verification (prevents anonymous abuse of the Claude API key) ──
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY')!
    const supabase = createClient(supabaseUrl, supabaseKey)

    const authHeader = req.headers.get('Authorization')
    if (authHeader) {
      // If an Authorization header is sent, verify the token
      const token = authHeader.replace('Bearer ', '')
      const { error: authError } = await supabase.auth.getUser(token)
      if (authError) {
        return new Response(JSON.stringify({ error: 'Invalid token' }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 401,
        })
      }
    }

    // ── Parse request body ──
    const body = await req.json().catch(() => ({}))
    const message = body?.message

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return new Response(JSON.stringify({ error: 'Missing or invalid "message" field' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      })
    }

    // ── Truncate to avoid abuse (max 500 chars) ──
    const truncatedMessage = message.slice(0, 500)

    const anthropicApiKey = Deno.env.get('ANTHROPIC_API_KEY')
    if (!anthropicApiKey) {
      throw new Error('Missing ANTHROPIC_API_KEY environment variable')
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': anthropicApiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        model: 'claude-3-haiku-20240307',
        max_tokens: 300,
        system: 'Eres ARI, la experta asistente de belleza de Aruma. Eres amigable, respondes en español peruano, y das consejos breves (máximo 3 líneas) sobre dermocosmética y rutinas. No proporciones consejos médicos; recomienda consultar a un dermatólogo para diagnósticos.',
        messages: [{ role: 'user', content: truncatedMessage }]
      })
    })

    const data = await response.json()

    // ── Handle Claude API error responses ──
    if (!response.ok || data.type === 'error') {
      const errMsg = data?.error?.message || 'Claude API error'
      console.error('Claude API error:', errMsg)
      return new Response(JSON.stringify({ error: errMsg }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 502,
      })
    }

    return new Response(
      JSON.stringify(data),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    )
  } catch (error) {
    console.error('ari-chat function error:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})
