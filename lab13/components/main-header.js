import Link from 'next/link';
import Image from 'next/image';
import styles from './main-header.module.css';

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/images/icon.png" alt="Logo" width={50} height={50} />
        <Link href="/">NextLevel Food</Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/meals">Meals</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
