"use client";

import { CartProvider } from "@/context/CartContext";
import { NotificationProvider } from "@/context/NotificationContext";

export default function AppProviders({ children }) {
  return (
    <NotificationProvider>
      <CartProvider>{children}</CartProvider>
    </NotificationProvider>
  );
}
