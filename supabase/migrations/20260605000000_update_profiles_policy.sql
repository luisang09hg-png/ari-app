-- Agrega política INSERT a perfiles
create policy "Users can insert their own profile"
  on public.profiles for insert
  to authenticated
  with check ( (select auth.uid()) = id );
