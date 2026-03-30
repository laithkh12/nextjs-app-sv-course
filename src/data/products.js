export const products = [
  {
    id: "dell-pc",
    image: "/assets/dell_pc.png",
    title: "Dell Desktop PC - Powerful & Reliable Performance",
    description:
      "A sleek and reliable desktop PC designed for everyday productivity and smooth performance. Powered by an Intel Core i7 processor with 16GB RAM and fast SSD storage, it handles work, browsing, and multitasking with ease - all in a clean, minimal design perfect for any workspace.",
    rating: 4.8,
    price: 999,
  },
  {
    id: "robot-vacuum",
    image: "/assets/robot_vacom.png",
    title: "Smart Robot Vacuum - Effortless Cleaning",
    description:
      "Keep your home spotless with this smart robot vacuum. Featuring powerful suction, app control, and automatic self-charging, it cleans floors efficiently while you relax. Its sleek, minimal design fits perfectly into any modern home.",
    rating: 4.6,
    price: 349,
  },
  {
    id: "wireless-earbuds",
    image: "/assets/wireless_earbuds.png",
    title: "Wireless Earbuds - Premium Sound & Comfort",
    description:
      "Experience clear, high-quality sound with these wireless earbuds designed for everyday use. With long battery life, touch controls, and a compact charging case, they deliver comfort and convenience whether you're listening to music, taking calls, or on the go.",
    rating: 4.7,
    price: 129,
  },
  {
    id: "smart-watch",
    image: "/assets/security_camera.png",
    title: "Smart Watch - Fitness & Daily Tracking",
    description:
      "Stay connected and track your health with this smart watch designed for everyday use. Featuring fitness tracking, heart rate monitoring, and smart notifications, it helps you stay active and organized while maintaining a sleek, modern look.",
    rating: 4.5,
    price: 199,
  },
  {
    id: "bluetooth-speaker",
    image: "/assets/speaker.png",
    title: "Portable Bluetooth Speaker - Powerful Sound Anywhere",
    description:
      "Enjoy your favorite music anywhere with this portable Bluetooth speaker. Designed with powerful sound, long battery life, and a stylish LED light display, it is perfect for outdoor use, parties, or relaxing at home. Compact and easy to carry, it delivers great audio wherever you go.",
    rating: 4.4,
    price: 89,
  },
  {
    id: "espresso-machine",
    image: "/assets/espresso_machine.png",
    title: "Espresso Coffee Machine - Barista Quality at Home",
    description:
      "Brew rich, flavorful espresso from the comfort of your home with this modern coffee machine. Designed for convenience and performance, it delivers smooth shots, creamy froth, and cafe-quality drinks in minutes. Perfect for coffee lovers who want a premium experience every day.",
    rating: 4.9,
    price: 279,
  },
];

export const getProductById = (id) => products.find((product) => product.id === id);
