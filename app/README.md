# `not-found.tsx` Cheatsheet

This folder shows how 404 handling works in the Next.js App Router.

## Global `not-found.tsx`

A `not-found.tsx` file placed at the root of the `app` folder acts as the global 404 page.

Example:

```text
app/
  not-found.tsx
```

Use this when you want one shared fallback for the whole site.

## Local `not-found.tsx`

You can also add a `not-found.tsx` inside a route segment to handle missing pages only for that section.

Example:

```text
app/
  products/
    not-found.tsx
    [productId]/
      reviews/
        not-found.tsx
```

Use local `not-found.tsx` when a specific route group needs its own 404 UI.

## How It Works

- If a page or nested segment calls `notFound()`, Next.js renders the nearest `not-found.tsx`.
- If no local `not-found.tsx` exists, it falls back to the global one in `app/not-found.tsx`.

## `notFound()` Function

Import it from `next/navigation`:

```tsx
import { notFound } from "next/navigation";
```

Then call it when data is missing or invalid:

```tsx
if (!product) notFound();
```

You can also use it for route validation:

```tsx
if (parseInt(reviewId) > 100) notFound();
```

Calling `notFound()` stops rendering and shows the matching 404 page.

## Quick Difference

- `not-found.tsx`: the UI file for the 404 page.
- `notFound()`: the function that triggers that 404 page.

## Rule of Thumb

Use a global `not-found.tsx` for shared site-wide 404 handling.
Use a local `not-found.tsx` when one route section needs custom error UI.
