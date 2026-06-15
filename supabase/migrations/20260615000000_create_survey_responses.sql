-- ═══════════════════════════════════════════════════════════
-- Migración: Encuesta de valorización del diagnóstico final
-- Tabla: survey_responses
-- ═══════════════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS public.survey_responses (
  id                   UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id              UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  -- Pregunta 1: Valoración general con estrellas (1-5)
  rating_stars         SMALLINT CHECK (rating_stars >= 1 AND rating_stars <= 5),
  -- Pregunta 2: ¿Los productos coinciden con lo que buscabas? (Sí/No)
  productos_coinciden  BOOLEAN,
  -- Pregunta 3: ¿Volvería a usar ARI? (Sí/No)
  volveria_usar        BOOLEAN,
  -- Pregunta 4: ¿Qué te resultó más útil? (opción múltiple)
  mas_util             TEXT,
  -- Pregunta 5: ¿Qué mejorarías? (opción múltiple)
  mejorar              TEXT,
  -- Comentario libre (opcional)
  comment              TEXT,
  -- Snapshot del diagnóstico en el momento de la encuesta
  diagnosis_snapshot   JSONB,
  -- Token de Cloudflare Turnstile para validación anti-bot
  turnstile_token      TEXT,
  created_at           TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Índices para queries frecuentes
CREATE INDEX IF NOT EXISTS idx_survey_responses_user_id     ON public.survey_responses(user_id);
CREATE INDEX IF NOT EXISTS idx_survey_responses_created_at  ON public.survey_responses(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_survey_responses_rating_stars ON public.survey_responses(rating_stars);

-- ── Row Level Security ──────────────────────────────────────
ALTER TABLE public.survey_responses ENABLE ROW LEVEL SECURITY;

-- INSERT: Restringido para que solo se inserte a través de la Edge Function (service_role bypasses RLS)
-- CREATE POLICY "Anyone can insert survey responses"
--   ON public.survey_responses
--   FOR INSERT
--   WITH CHECK (true);

-- SELECT: Solo el propio usuario puede ver sus respuestas
CREATE POLICY "Users can view own survey responses"
  ON public.survey_responses
  FOR SELECT
  USING (auth.uid() = user_id);

-- UPDATE / DELETE: No permitido (respuestas inmutables)
-- (sin políticas = bloqueado por RLS)

COMMENT ON TABLE public.survey_responses IS 
  'Encuesta de valorización del diagnóstico final de ARI. Máximo 5 preguntas: estrellas, 2 Sí/No, 2 opciones múltiples.';
