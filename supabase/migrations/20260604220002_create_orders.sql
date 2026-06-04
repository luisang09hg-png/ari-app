-- Orders: purchase history
create table public.orders (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  items jsonb not null,
  total numeric(10,2) not null,
  status text default 'pending' not null check (status in ('pending','confirmed','shipped','delivered','cancelled')),
  created_at timestamptz default now() not null
);

-- Index for fast lookups by user, ordered by date
create index idx_orders_user_date on public.orders(user_id, created_at desc);

-- Enable RLS
alter table public.orders enable row level security;

-- Policies
create policy "Users can view their own orders"
  on public.orders for select
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "Users can create their own orders"
  on public.orders for insert
  to authenticated
  with check ((select auth.uid()) = user_id);
