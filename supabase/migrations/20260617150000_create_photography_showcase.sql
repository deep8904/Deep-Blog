create table if not exists public.photos (
  id uuid primary key default gen_random_uuid(),
  lightroom_asset_id text not null unique,
  title text,
  caption text,
  alt_text text,
  capture_date timestamptz,
  width integer,
  height integer,
  dominant_color text,
  camera_make text,
  camera_model text,
  lens text,
  metadata jsonb not null default '{}'::jsonb,
  storage_bucket text not null default 'photography',
  storage_path text not null,
  sort_order integer not null default 0,
  published boolean not null default false,
  synced_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.photo_comments (
  id uuid primary key default gen_random_uuid(),
  photo_id uuid not null references public.photos(id) on delete cascade,
  display_name text not null,
  body text not null,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists photos_published_sort_idx
  on public.photos (published, sort_order, capture_date desc);

create index if not exists photo_comments_photo_status_idx
  on public.photo_comments (photo_id, status, created_at desc);

alter table public.photos enable row level security;
alter table public.photo_comments enable row level security;

grant usage on schema public to anon, authenticated;
grant select on public.photos to anon, authenticated;
grant select, insert on public.photo_comments to anon, authenticated;

drop policy if exists "Published photos are publicly readable" on public.photos;
create policy "Published photos are publicly readable"
  on public.photos for select
  to anon, authenticated
  using (published = true);

drop policy if exists "Approved comments are publicly readable" on public.photo_comments;
create policy "Approved comments are publicly readable"
  on public.photo_comments for select
  to anon, authenticated
  using (
    status = 'approved'
    and exists (
      select 1
      from public.photos
      where photos.id = photo_comments.photo_id
        and photos.published = true
    )
  );

drop policy if exists "Anyone can submit pending photo comments" on public.photo_comments;
create policy "Anyone can submit pending photo comments"
  on public.photo_comments for insert
  to anon, authenticated
  with check (
    status = 'pending'
    and length(trim(display_name)) between 1 and 80
    and length(trim(body)) between 3 and 1200
    and exists (
      select 1
      from public.photos
      where photos.id = photo_comments.photo_id
        and photos.published = true
    )
  );

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'photography',
  'photography',
  true,
  10485760,
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;
