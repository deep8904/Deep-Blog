# Photography moderation

## Approve a comment

```sql
update public.photo_comments
set status = 'approved', updated_at = now()
where id = '<comment-id>';
```

## Reject a comment

```sql
update public.photo_comments
set status = 'rejected', updated_at = now()
where id = '<comment-id>';
```

## Review pending comments

```sql
select
  photo_comments.id,
  photo_comments.display_name,
  photo_comments.body,
  photo_comments.created_at,
  photos.title,
  photos.lightroom_asset_id
from public.photo_comments
join public.photos on photos.id = photo_comments.photo_id
where photo_comments.status = 'pending'
order by photo_comments.created_at desc;
```
