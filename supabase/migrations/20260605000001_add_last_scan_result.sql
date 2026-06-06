-- Añade columna para el historial de escaneos
alter table public.profiles add column if not exists last_scan_result jsonb;
