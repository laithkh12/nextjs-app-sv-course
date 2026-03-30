import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductById } from "@/data/products";
import ProductActions from "./ProductActions";
import styles from "./product-details.module.css";

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.imageWrap}>
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 860px) 100vw, 50vw"
            className={styles.image}
            priority
          />
        </div>
        <div className={styles.content}>
          <p className={styles.breadcrumb}>Product Details</p>
          <h1>{product.title}</h1>
          <p className={styles.description}>{product.description}</p>
          <div className={styles.meta}>
            <span>⭐ Rating: {product.rating}</span>
            <span>Price: ${product.price}</span>
          </div>
          <ProductActions productId={product.id} price={product.price} />
          <div className={styles.actions}>
            <Link href="/" className={styles.secondaryButton}>
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
