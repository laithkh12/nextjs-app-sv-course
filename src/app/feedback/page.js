import FeedbackCard from "@/components/feedback/FeedbackCard";
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
  {
    name: "Emma Davis",
    image: "https://i.pravatar.cc/80?img=47",
    feedback:
      "Very smooth shopping experience and the quality feels premium for the price.",
    stars: 5,
  },
  {
    name: "James Wilson",
    image: "https://i.pravatar.cc/80?img=22",
    feedback:
      "The product arrived on time and exactly matched the description online.",
    stars: 4,
  },
  {
    name: "Sophia Garcia",
    image: "https://i.pravatar.cc/80?img=5",
    feedback:
      "I love how easy it is to compare products. Checkout was fast and simple.",
    stars: 5,
  },
  {
    name: "Benjamin Lee",
    image: "https://i.pravatar.cc/80?img=59",
    feedback:
      "Great value and friendly support team. They answered my questions quickly.",
    stars: 4,
  },
  {
    name: "Olivia Brown",
    image: "https://i.pravatar.cc/80?img=32",
    feedback:
      "Modern products and reliable service. This is now my go-to tech store.",
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
              <FeedbackCard
                key={card.name}
                name={card.name}
                image={card.image}
                feedback={card.feedback}
                stars={card.stars}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
