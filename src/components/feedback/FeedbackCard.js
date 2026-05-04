import styles from "./FeedbackCard.module.css";

export default function FeedbackCard({ name, image, feedback, stars }) {
  const filled = Math.min(5, Math.max(0, stars));

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <img
          src={image}
          alt={`${name} avatar`}
          className={styles.avatar}
        />
        <div>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.stars}>
            {"★".repeat(filled)}
            {"☆".repeat(5 - filled)}
          </p>
        </div>
      </div>
      <p className={styles.text}>{feedback}</p>
    </article>
  );
}
