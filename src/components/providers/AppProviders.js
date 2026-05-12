"use client";

import { CartProvider } from "@/context/CartContext";
import { NotificationProvider } from "@/context/NotificationContext";
import QueryProvider from "./QueryProvider";

export default function AppProviders({ children }) {
  return (
    <QueryProvider>
      <NotificationProvider>
        <CartProvider>{children}</CartProvider>
      </NotificationProvider>
    </QueryProvider>
  );
}
