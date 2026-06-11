revoke execute on function public.rls_auto_enable() from public;
revoke execute on function public.rls_auto_enable() from anon;
revoke execute on function public.rls_auto_enable() from authenticated;

grant execute on function public.rls_auto_enable() to postgres;
grant execute on function public.rls_auto_enable() to service_role;
