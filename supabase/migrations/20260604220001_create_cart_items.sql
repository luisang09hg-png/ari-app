-- Cart Items: persistent shopping cart per user
create table public.cart_items (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  product_id int not null,
  cantidad int default 1 not null check (cantidad > 0 and cantidad <= 2),
  created_at timestamptz default now() not null,
  unique(user_id, product_id)
);

-- Index for fast lookups
create index idx_cart_items_user on public.cart_items(user_id);

-- Enable RLS
alter table public.cart_items enable row level security;

-- Policy: full CRUD on own cart
create policy "Users can select their own cart"
  on public.cart_items for select
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "Users can insert into their own cart"
  on public.cart_items for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

create policy "Users can update their own cart"
  on public.cart_items for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create policy "Users can delete from their own cart"
  on public.cart_items for delete
  to authenticated
  using ((select auth.uid()) = user_id);
