# Route Groups Cheatsheet

Route groups are folders wrapped in parentheses that don't become part of the URL path.

## How It Works

Folders wrapped with parentheses `(name)` are organizational but invisible to the router.

Example structure:

```text
app/
  (admin)/
    dashboard/
      page.tsx
    settings/
      page.tsx
  (public)/
    about/
      page.tsx
```

Routes created:

- `/dashboard` (not `/(admin)/dashboard`)
- `/settings` (not `/(admin)/settings`)
- `/about` (not `/(public)/about`)

The parentheses don't appear in the URL.

## Use Cases

- Group related pages without changing their URLs.
- Organize pages logically in the file structure.
- Create separate layouts for different page groups.
- Keep admin and public pages in separate folders conceptually.

## Multiple Route Groups

You can create multiple route groups at the same level:

```text
app/
  (admin)/
    dashboard/
    settings/
  (auth)/
    login/
    register/
  (public)/
    about/
    contact/
```

Each group can have its own layout without affecting URL paths.

## Route Group Layout

Each route group can have a `layout.tsx`:

```text
app/
  (admin)/
    layout.tsx
    dashboard/
      page.tsx
```

This layout only applies to pages inside `(admin)`, not to other groups.

## Quick Rule

Use route groups to organize your code structure.
Parentheses make sure they don't change the URL.

Comparison:

- `app/admin/dashboard/page.tsx` -> `/admin/dashboard`
- `app/(admin)/dashboard/page.tsx` -> `/dashboard` (cleaner)
