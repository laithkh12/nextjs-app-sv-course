# TanStack Query

TanStack Query, formerly React Query, is a library for managing server state in React apps. Server state means data that lives outside the browser, such as products from an API, users from a database, or feedback stored on a backend.

It helps with the hard parts of async data:

- Fetching data from APIs
- Caching fetched data
- Avoiding duplicate requests for the same data
- Showing loading and error states
- Refetching data when it becomes stale
- Updating or invalidating cached data after mutations

This is different from normal React state. React state is best for UI state, like whether a menu is open or what quantity the user selected. TanStack Query is best for data that comes from a server and may change outside the current page.

## Basic Usage

First, the app needs one `QueryClientProvider` near the top of the component tree:

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

Then a client component can use `useQuery`:

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

`queryKey` is the cache name. If another component asks for `["products"]`, TanStack Query can reuse the cached result instead of starting from scratch.

`queryFn` is the async function that fetches the data.

## How This Project Uses It

This project now uses TanStack Query on the home page product grid.

- `src/components/providers/QueryProvider.js` creates the `QueryClient` and wraps the app with `QueryClientProvider`.
- `src/components/providers/AppProviders.js` includes `QueryProvider` with the other app providers.
- `src/app/api/products/route.js` exposes the local `products` array as an API endpoint at `/api/products`.
- `src/app/page.js` uses `useQuery` with `queryKey: ["products"]` to load products from `/api/products`.

The product list still starts from the local `src/data/products.js` file, but the home page now treats it like server data. This gives the project a real example of loading state, error state, caching, and reusable query logic.

## When To Use It

Use TanStack Query when a component needs data from an API or backend, for example:

- Products from MongoDB or another database
- User profile details
- Orders
- Feedback/reviews
- Search results

Do not use it for simple local UI state, such as a modal being open or a quantity counter. Keep that in React state with `useState`.
