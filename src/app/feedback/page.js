import styles from "../info-pages.module.css";

export default function FeedbackPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1>Feedback</h1>
          <p>Your ideas help us improve the shopping experience at SV Store.</p>
        </section>
        <section className={styles.section}>
          <h2>Share Your Thoughts</h2>
          <p>
            We value your feedback. Share your suggestions and shopping
            experience with us at feedback@svstore.com to help us improve SV
            Store.
          </p>
        </section>
      </div>
    </main>
  );
}
