import styles from "../info-pages.module.css";

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1>About SV Store</h1>
          <p>
            Welcome to SV Store - your destination for the latest in modern
            technology.
          </p>
        </section>
        <section className={styles.section}>
          <h2>About Us</h2>
          <p>
            We are passionate about bringing you cutting-edge gadgets, smart
            devices, and innovative tech that make everyday life easier,
            faster, and more connected. Whether you are upgrading your setup,
            exploring new tech, or searching for the perfect gift, we are here
            to help you stay ahead in a fast-moving digital world.
          </p>
          <p>
            At SV Store, we believe technology should be accessible, reliable,
            and exciting. That is why we carefully select high-quality
            products, focus on great customer experience, and stay up to date
            with the newest trends in tech.
          </p>
          <h3>Our Mission</h3>
          <p>To deliver modern technology that fits your lifestyle.</p>
        </section>

        <section className={styles.section}>
          <h2>Why Choose Us</h2>
          <ul className={styles.chooseList}>
            <li>Latest and trending tech products</li>
            <li>Quality you can trust</li>
            <li>Competitive prices</li>
            <li>Friendly, responsive support</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Our Vision</h2>
          <p>
            To become a trusted hub for modern technology, where innovation
            meets everyday life.
          </p>
        </section>

        <section className={styles.section}>
          <h2>About Us (Modern/Edgy Version)</h2>
          <p>At SV Store, we do not just sell tech - we live it.</p>
          <p>
            We are built for people who want smarter tools, faster devices, and
            a more connected lifestyle. From everyday essentials to the latest
            innovations, we bring you technology that actually makes a
            difference.
          </p>
          <p>
            No outdated products. No complicated choices. Just modern tech,
            made simple.
          </p>
        </section>
      </div>
    </main>
  );
}
