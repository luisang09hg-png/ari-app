-- Magenta Points: gamification loyalty system
create table public.magenta_points (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  points int not null,
  reason text,
  created_at timestamptz default now() not null
);

-- Index for fast lookups by user
create index idx_magenta_points_user on public.magenta_points(user_id);

-- Enable RLS
alter table public.magenta_points enable row level security;

-- Policies
create policy "Users can view their own points"
  on public.magenta_points for select
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "Users can insert their own points"
  on public.magenta_points for insert
  to authenticated
  with check ((select auth.uid()) = user_id);
