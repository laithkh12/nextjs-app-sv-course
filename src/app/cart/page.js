"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useNotification } from "@/context/NotificationContext";
import styles from "./page.module.css";

export default function CartPage() {
  const { cartItems, cartTotal, increaseItem, decreaseItem, removeItem } =
    useCart();
  const { notify } = useNotification();
  const [itemToDelete, setItemToDelete] = useState(null);

  const requestDeleteItem = (item) => setItemToDelete(item);
  const closeDeleteDialog = () => setItemToDelete(null);
  const confirmDelete = () => {
    if (!itemToDelete) {
      return;
    }

    removeItem(itemToDelete.id);
    notify("Item removed from cart", "success");
    closeDeleteDialog();
  };

  const cancelDelete = () => {
    notify("Item was not removed", "info");
    closeDeleteDialog();
  };

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.header}>
          <h1>Your Cart</h1>
          <p>Review selected products, update quantity, or remove items.</p>
        </section>

        {cartItems.length === 0 ? (
          <section className={styles.empty}>
            <p>Your cart is empty.</p>
            <Link href="/" className={styles.backButton}>
              Continue Shopping
            </Link>
          </section>
        ) : (
          <>
            <section className={styles.list}>
              {cartItems.map((item) => (
                <article key={item.id} className={styles.card}>
                  <div className={styles.imageWrap}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 900px) 100vw, 200px"
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.content}>
                    <h2>{item.title}</h2>
                    <p className={styles.price}>Unit Price: ${item.price}</p>
                    <p className={styles.total}>Total: ${item.total}</p>
                    <div className={styles.actions}>
                      <div className={styles.quantityControl}>
                        <button
                          type="button"
                          className={styles.qtyButton}
                          onClick={() => decreaseItem(item.id)}
                        >
                          -
                        </button>
                        <span className={styles.qtyValue}>{item.quantity}</span>
                        <button
                          type="button"
                          className={styles.qtyButton}
                          onClick={() => increaseItem(item.id)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        className={styles.deleteButton}
                        onClick={() => requestDeleteItem(item)}
                        aria-label={`Remove ${item.title} from cart`}
                      >
                        🗑
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </section>

            <section className={styles.summary}>
              <p>
                Grand Total: <strong>${cartTotal}</strong>
              </p>
              <Link href="/" className={styles.backButton}>
                Continue Shopping
              </Link>
            </section>
          </>
        )}
      </div>
      {itemToDelete ? (
        <div className={styles.dialogOverlay} onClick={cancelDelete}>
          <section
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby="remove-item-title"
            onClick={(event) => event.stopPropagation()}
          >
            <h2 id="remove-item-title">Remove item?</h2>
            <p>
              Are you sure you want to remove{" "}
              <strong>{itemToDelete.title}</strong> from your cart?
            </p>
            <div className={styles.dialogActions}>
              <button
                type="button"
                className={styles.cancelButton}
                onClick={cancelDelete}
              >
                Cancel
              </button>
              <button
                type="button"
                className={styles.confirmButton}
                onClick={confirmDelete}
              >
                Remove
              </button>
            </div>
          </section>
        </div>
      ) : null}
    </main>
  );
}
