# Dynamic Routing Cheatsheet

This folder shows a dynamic route in the Next.js App Router.

## How It Works

- The folder name in brackets becomes a dynamic URL segment.
- `[productId]` matches any product id in the URL.
- The page file at `app/products/[productId]/page.tsx` handles routes like `/products/1` or `/products/abc`.
- In a page component, `params` contains the route value.

## Example

```text
app/
  products/
    [productId]/
      page.tsx
```

## Nested Dynamic Routes Example

You can nest one dynamic segment inside another.

Example route:

- `/products/42/reviews/7`

Example file structure:

```text
app/
  products/
    [productId]/
      page.tsx
      reviews/
        [reviewId]/
          page.tsx
```

In this case:

- `productId` and `reviewId` are both dynamic params.
- URL params are strings.

## What To Remember

- Use brackets for dynamic folders: `[slug]`, `[id]`, `[productId]`.
- Nested brackets create nested dynamic routes.
- Read the route value from `params`.
- Route params come from the URL, so they are strings by default.
- Add `layout.tsx` if all nested product pages should share UI.

## Quick Mental Model

Folder structure becomes URL structure.
Static folders = fixed paths.
Bracket folders = dynamic paths.
