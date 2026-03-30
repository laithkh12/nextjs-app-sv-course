import styles from "../info-pages.module.css";

export default function ContactUsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1>Contact Us</h1>
          <p>Our support team is ready to help with products and orders.</p>
        </section>
        <section className={styles.section}>
          <h2>Support</h2>
          <p>
            Need help with a product or your order? Reach out to us at
            support@svstore.com and our team will respond as soon as possible.
          </p>
        </section>
      </div>
    </main>
  );
}
