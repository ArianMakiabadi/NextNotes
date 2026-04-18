# Catch-all Routes Cheatsheet

This folder documents catch-all routing in the Next.js App Router.

## Catch-all Route: `[...slug]`

A catch-all route matches one or more URL segments.

Example structure:

```text
app/
  shop/
    [...slug]/
      page.tsx
```

Example matches:

- `/shop/clothes`
- `/shop/clothes/tops`
- `/shop/clothes/tops/red`

Does not match:

- `/shop`

`slug` is an array of strings, for example:

- `/shop/clothes/tops` -> `slug = ["clothes", "tops"]`

## Optional Catch-all Route: `[[...slug]]`

An optional catch-all route matches zero or more URL segments.

Example structure:

```text
app/
  shop/
    [[...slug]]/
      page.tsx
```

Example matches:

- `/shop`
- `/shop/clothes`
- `/shop/clothes/tops`

`slug` can be missing (or undefined) when the path is just `/shop`.

## Difference Summary

- `[...slug]`: requires at least one segment after `/shop`.
- `[[...slug]]`: segment is optional, so `/shop` also matches.

## Quick Rule

Use `[...slug]` when you always need at least one segment.
Use `[[...slug]]` when the base path should also render the same page.
