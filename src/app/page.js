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
        priority
        unoptimized={true} // Disable image optimization
        loading="eager" // Load the image immediately
        fetchPriority="high" // Set high priority for fetching the image
        quality={100} // Set image quality to 100%
        placeholder="blur" // Use blur placeholder
        blurDataURL="/nextjs-logo-blur.png" // Path to the blurred placeholder image
        sizes="(max-width: 600px) 100vw, 50vw" // Responsive image sizes
      />
    </main>
  );
}
