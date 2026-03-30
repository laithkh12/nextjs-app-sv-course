"use client";

import Link from "next/link";
import styles from "./NavBar.module.css";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/feedback", label: "Feedback" },
];

export default function NavBar() {
  const { cartCount } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          SV Store
        </Link>
        <nav className={styles.nav} aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
          <Link href="/cart" className={styles.cartLink} aria-label="Open cart page">
            <span className={styles.cartIcon}>🛒</span>
            <span className={styles.cartText}>Cart</span>
            <span className={styles.cartBadge}>{cartCount}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
