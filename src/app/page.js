"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Modern Tech Store</h1>
          <p>
            Explore premium products built for productivity, comfort, and
            everyday lifestyle.
          </p>
        </section>
        <div className={styles.grid}>
          {products.map((product) => (
            <article key={product.id} className={styles.card}>
              <Link href={`/products/${product.id}`} className={styles.cardLink}>
                <div className={styles.imageWrap}>
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.image}
                  />
                </div>
                <div className={styles.content}>
                  <h2>{product.title}</h2>
                  <p>{product.description.slice(0, 110)}...</p>
                  <div className={styles.meta}>
                    <span>⭐ {product.rating}</span>
                    <span>${product.price}</span>
                  </div>
                </div>
              </Link>
              <div className={styles.actions}>
                <Link href={`/products/${product.id}`} className={styles.primaryButton}>
                  Add to Cart
                </Link>
                <Link href={`/products/${product.id}`} className={styles.secondaryButton}>
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
