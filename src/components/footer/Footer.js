import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© {new Date().getFullYear()} SV Store. All rights reserved.</p>
      </div>
    </footer>
  );
}
