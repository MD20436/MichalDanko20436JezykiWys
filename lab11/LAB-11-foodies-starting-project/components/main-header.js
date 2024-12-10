import Link from 'next/link';
import Image from 'next/image';
import logoImg from '/public/images/logo.png';
import styles from './main-header.module.css';

export default function MainHeader() {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <Image 
                    src={logoImg} 
                    alt="A plate with food on it" 
                    width={150} 
                    height={50} 
                />
                NextLevel Food
            </Link>
            <nav>
                <ul>
                    <li><Link href="/meals">Meals</Link></li>
                    <li><Link href="/meals/share">Share</Link></li>
                    <li><Link href="/community">Community</Link></li>
                </ul>
            </nav>
        </header>
    );
}