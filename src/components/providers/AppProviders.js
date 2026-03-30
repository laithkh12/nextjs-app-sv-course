"use client";

import { ToastContainer } from "react-toastify";
import { CartProvider } from "@/context/CartContext";

export default function AppProviders({ children }) {
  return (
    <CartProvider>
      {children}
      <ToastContainer position="top-right" autoClose={1800} />
    </CartProvider>
  );
}
