import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Server-side point mapping — single source of truth
const POINTS_MAP: Record<string, number> = {
  'compra_completada':  100,
  'escaner_completado': 50,
  'Actividad ARI':      50,
}
const DEFAULT_POINTS = 10

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables')
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    // ── Auth verification ──
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      return new Response(JSON.stringify({ error: 'Missing Authorization header' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 401,
      })
    }

    const token = authHeader.replace('Bearer ', '')
    const { data: { user }, error: authError } = await supabase.auth.getUser(token)
    if (authError || !user) {
      return new Response(JSON.stringify({ error: 'Invalid or expired token' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 401,
      })
    }

    // ── Parse request body ──
    const body = await req.json().catch(() => ({}))
    const reason: string = body?.reason || 'Actividad ARI'

    // ── Server-side point mapping ──
    const points = POINTS_MAP[reason] ?? DEFAULT_POINTS

    // ── Insert points record ──
    const { error: insertError } = await supabase
      .from('magenta_points')
      .insert({
        user_id: user.id,
        points:  points,
        reason:  reason
      })

    if (insertError) {
      console.error('DB insert error:', insertError)
      throw insertError
    }

    return new Response(
      JSON.stringify({ success: true, points, reason }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    )
  } catch (error) {
    console.error('add-points function error:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})
