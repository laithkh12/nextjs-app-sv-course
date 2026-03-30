"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { getProductById } from "@/data/products";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState({});

  const addToCart = (productId, quantity) => {
    if (quantity <= 0) {
      return;
    }

    setItems((prev) => ({
      ...prev,
      [productId]: (prev[productId] ?? 0) + quantity,
    }));
  };

  const increaseItem = (productId) => {
    setItems((prev) => ({
      ...prev,
      [productId]: (prev[productId] ?? 0) + 1,
    }));
  };

  const decreaseItem = (productId) => {
    setItems((prev) => {
      const current = prev[productId] ?? 0;
      const next = Math.max(current - 1, 0);

      if (next === 0) {
        const { [productId]: _, ...rest } = prev;
        return rest;
      }

      return {
        ...prev,
        [productId]: next,
      };
    });
  };

  const removeItem = (productId) => {
    setItems((prev) => {
      const { [productId]: _, ...rest } = prev;
      return rest;
    });
  };

  const cartCount = Object.values(items).reduce((sum, quantity) => sum + quantity, 0);

  const cartItems = Object.entries(items)
    .map(([productId, quantity]) => {
      const product = getProductById(productId);
      if (!product) {
        return null;
      }

      return {
        ...product,
        quantity,
        total: quantity * product.price,
      };
    })
    .filter(Boolean);

  const cartTotal = cartItems.reduce((sum, item) => sum + item.total, 0);

  const value = useMemo(
    () => ({
      items,
      cartItems,
      cartCount,
      cartTotal,
      addToCart,
      increaseItem,
      decreaseItem,
      removeItem,
    }),
    [items, cartItems, cartCount, cartTotal]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
