import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to My Next.js App</h1>
      <p className={styles.description}>
        This is a simple example of a Next.js application.
      </p>
      <Image
        src="/nextjs-logo.png"
        alt="Next.js Logo"
        width={200}
        height={200}
        className={styles.logo}
      />
    </main>
  );
}
