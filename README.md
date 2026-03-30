# SV Store - Next.js Online Store

SV Store is a modern online store built with Next.js (App Router) and JavaScript.
It includes a product catalog, product details, shared cart state, cart management, and toast notifications.

## Features

- Professional responsive layout with global navbar and footer
- Product cards with rating, price, and details navigation
- Product details page with quantity controls (`+` / `-`) and add-to-cart
- Shared cart with:
  - quantity updates
  - per-item totals
  - grand total
  - remove item action with confirmation popup dialog
- Toast notifications (React Toastify) for add/remove/cancel actions

## App Routes

- `/` - Home product listing
- `/products/[id]` - Product details
- `/cart` - Cart page
- `/about` - About page
- `/contact-us` - Contact page
- `/feedback` - Feedback page

## Tech Stack

- Next.js (App Router)
- React
- JavaScript
- CSS Modules
- React Toastify

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/app` - Route pages and route-level styles
- `src/components` - Reusable UI components (navbar, footer, providers)
- `src/context` - Global cart context/state
- `src/data` - Product data source
- `public/assets` - Product images
