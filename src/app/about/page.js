import styles from "../info-pages.module.css";

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1>About SV Store</h1>
          <p>
            SV Store is an online shop focused on practical, stylish products
            for work, home, and daily life.
          </p>
        </section>
        <section className={styles.section}>
          <h2>What We Offer</h2>
          <p>
            We curate quality electronics and modern essentials with a clean,
            easy shopping experience. Our goal is to help customers find
            reliable products quickly without unnecessary complexity.
          </p>
        </section>
      </div>
    </main>
  );
}
