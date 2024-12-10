import styles from './main-header-background.module.css';

export default function MainHeaderBackground({ children }) {
    return <div className={styles.background}>{children}</div>;
}