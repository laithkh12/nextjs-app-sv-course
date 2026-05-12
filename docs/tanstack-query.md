# TanStack Query

TanStack Query (previously called React Query) is a library that helps manage server-side data in React applications. Server state refers to data that comes from outside the app itself, like products from an API, user information from a database, or reviews stored on a backend.

Handling async data manually in React can get repetitive pretty quickly. TanStack Query simplifies a lot of that work by handling things like:

- Fetching data from APIs
- Caching responses
- Preventing duplicate requests
- Managing loading and error states
- Automatically refetching stale data
- Updating cached data after changes or mutations

This is different from regular React state. React state is mainly for UI-related things, such as whether a modal is open or which quantity a user selected. TanStack Query is better suited for data that comes from a server and can change independently of the current page.

## Basic Usage

To start using TanStack Query, the app needs a `QueryClientProvider` near the root of the component tree:

```jsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
```

After that, components can fetch data using `useQuery`:

```jsx
import { useQuery } from "@tanstack/react-query";

function Products() {
  const { data, isPending, isError } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetch("/api/products").then((res) => res.json()),
  });

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Could not load products.</p>;

  return data.map((product) => <p key={product.id}>{product.title}</p>);
}
```

The `queryKey` acts as the cache identifier. If another component requests the same key, TanStack Query can reuse the cached data instead of making another request.

The `queryFn` is simply the async function responsible for fetching the data.

## How It’s Used in This Project

In this project, TanStack Query is used for loading products on the home page.

Here’s how the setup is organized:

- `src/components/providers/QueryProvider.js` creates the `QueryClient` and wraps the application with `QueryClientProvider`.
- `src/components/providers/AppProviders.js` includes the `QueryProvider` alongside the app’s other providers.
- `src/app/api/products/route.js` exposes the local `products` array through an API endpoint at `/api/products`.
- `src/app/page.js` uses `useQuery` with the key `["products"]` to fetch product data from `/api/products`.

Even though the products still come from the local `src/data/products.js` file, the home page now handles them like real server data. This makes the project a good example of using loading states, error handling, caching, and reusable query logic in a realistic way.

## When To Use TanStack Query

TanStack Query is useful anytime a component needs data from an API or backend service, such as:

- Products from a database
- User profile information
- Orders
- Reviews or feedback
- Search results

For simple UI state, though, regular React state is still the better option. Things like toggling a modal or updating a quantity counter should usually stay in `useState`.
