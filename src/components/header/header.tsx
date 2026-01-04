import styles from './header.module.css';

export function Header() {
  return (
    <header className={styles['header-wrap']}>
      <h1>Event Listing</h1>
    </header>
  );
}
