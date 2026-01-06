import { Typography } from '../../lib/typography';
import styles from './header.module.css';

export function Header() {
  return (
    <header className={styles['header-wrap']}>
      <Typography variant="title" as="h1">
        Event Finder
      </Typography>
    </header>
  );
}
