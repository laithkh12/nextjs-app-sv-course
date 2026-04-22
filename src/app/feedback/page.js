import styles from "../info-pages.module.css";

const feedbackCards = [
  {
    name: "Ava Thompson",
    image: "https://i.pravatar.cc/80?img=12",
    feedback:
      "Super fast delivery and the product quality was better than expected.",
    stars: 5,
  },
  {
    name: "Noah Martinez",
    image: "https://i.pravatar.cc/80?img=33",
    feedback:
      "Easy checkout and great customer support. I found exactly what I needed.",
    stars: 4,
  },
  {
    name: "Liam Johnson",
    image: "https://i.pravatar.cc/80?img=15",
    feedback:
      "Clean website, fair prices, and the gadget works perfectly for my setup.",
    stars: 5,
  },
];

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

        <section className={styles.section}>
          <h2>Customer Feedback</h2>
          <div className={styles.feedbackGrid}>
            {feedbackCards.map((card) => (
              <article key={card.name} className={styles.feedbackCard}>
                <div className={styles.feedbackHeader}>
                  <img
                    src={card.image}
                    alt={`${card.name} avatar`}
                    className={styles.feedbackAvatar}
                  />
                  <div>
                    <h3 className={styles.feedbackName}>{card.name}</h3>
                    <p className={styles.feedbackStars}>
                      {"★".repeat(card.stars)}
                      {"☆".repeat(5 - card.stars)}
                    </p>
                  </div>
                </div>
                <p className={styles.feedbackText}>{card.feedback}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
