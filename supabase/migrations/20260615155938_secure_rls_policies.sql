-- Secure magenta_points: Remove the policy that allows users to insert their own points
DROP POLICY IF EXISTS "Users can insert their own points" ON public.magenta_points;

-- Secure survey_responses: Remove the policy that allows anyone to insert responses
DROP POLICY IF EXISTS "Anyone can insert survey responses" ON public.survey_responses;
