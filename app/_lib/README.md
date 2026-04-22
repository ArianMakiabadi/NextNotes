# Private Folders Cheatsheet

Private folders in Next.js start with an underscore and are excluded from routing.

## How It Works

Folders prefixed with `_` do not become URL segments.

Example structure:

```text
app/
  _lib/
    page.tsx
    helpers.ts
    utils.ts
  _components/
    Header.tsx
```

These folders are not accessible via routes:

- `/app/_lib/page.tsx` is NOT available at `/_lib`
- `/app/_components/` is NOT a route

## Use Cases

- Store shared utilities, helpers, and constants.
- Keep component folders separate from pages.
- Organize code that pages import from but don't route to.

## Difference from Public Routes

- `app/products/page.tsx` -> accessible at `/products`
- `app/_helpers/page.tsx` -> NOT accessible at any URL

## Making a Private Folder Routable

If you ever need a folder that starts with `_` to be routable, encode the underscore as `%5F`.

Example:

- `app/%5Flib/page.tsx` -> accessible at `/%5Flib` or `/_lib`

This is rarely needed, but useful if you want to serve underscored paths.

## Quick Rule

Use underscore folders for code, not pages.
Use regular folders for routes.

## Common Pattern

```text
app/
  _components/
    Nav.tsx
    Footer.tsx
  _lib/
    db.ts
    auth.ts
  page.tsx
  products/
    page.tsx
```

Pages (`page.tsx`) in regular folders create routes.
Files in `_` folders are only used for imports.
