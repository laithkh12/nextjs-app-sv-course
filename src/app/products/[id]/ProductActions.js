"use client";

import { useState } from "react";
import styles from "./product-details.module.css";
import { useCart } from "@/context/CartContext";
import { useNotification } from "@/context/NotificationContext";

export default function ProductActions({ productId, price }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { notify } = useNotification();

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => Math.max(prev - 1, 0));
  const addToCartProduct = () => {
    if (quantity <= 0) {
      return;
    }

    addToCart(productId, quantity);
    notify(`Added ${quantity} item(s) to cart`, "success");
  };

  return (
    <div className={styles.actionsBlock}>
      <div className={styles.quantityControl}>
        <button type="button" className={styles.qtyButton} onClick={decrease}>
          -
        </button>
        <span className={styles.qtyValue}>{quantity}</span>
        <button type="button" className={styles.qtyButton} onClick={increase}>
          +
        </button>
      </div>

      <p className={styles.totalPrice}>Total: ${price * quantity}</p>

      <button
        type="button"
        className={styles.primaryButton}
        onClick={() => addToCartProduct()}
        disabled={quantity <= 0}
      >
        Add to Cart
      </button>
    </div>
  );
}
