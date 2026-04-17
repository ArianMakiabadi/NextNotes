# Nested Routes Cheatsheet (Next.js App Router)

Quick reminder for future projects.

## Core Rule

Each folder name becomes a URL segment, and each route needs a `page.tsx` file.

- `app/page.tsx` -> `/`
- `app/posts/page.tsx` -> `/posts`
- `app/posts/first/page.tsx` -> `/posts/first`
- `app/posts/second/page.tsx` -> `/posts/second`

## Current Structure Example

```text
app/
  page.tsx
  posts/
    page.tsx
    first/
      page.tsx
    second/
      page.tsx
```

## What To Create In Real Projects

When adding a new nested page:

1. Create a folder for the new URL segment.
2. Add a `page.tsx` inside that folder.
3. Export a default React component from `page.tsx`.
4. Add links from parent pages so navigation is easy.

Example: route `/posts/third`

```text
app/posts/third/page.tsx
```

## Optional But Useful

- Add `layout.tsx` in a folder to share UI across child routes.
- Add `loading.tsx` for route-level loading state.
- Add `error.tsx` for route-level error fallback.
- Add `not-found.tsx` for custom 404 in that segment.

## Fast Checklist

- Folder name matches URL segment
- `page.tsx` exists
- default export exists
- navigation link added
- route tested in browser
