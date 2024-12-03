import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Witaj w Mojej Aplikacji!</h1>
        <p className={styles.subtitle}>
          Strona główna aplikacji zbudowanej w Next.js.
        </p>

        <Image
          className={styles.logo}
          src="/MichalDanko20436JezykiWys/images/logo.jpg"
          alt="Logo aplikacji"
          width={150}
          height={150}
          priority
        />

      </main>
      <footer className={styles.footer}>
        <p>© 2024. Wszystkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
}
