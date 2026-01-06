import { Typography } from '../../lib/typography';
import styles from './footer.module.css';

export function Footer() {
  const curYear = new Date().getFullYear();

  return (
    <footer className={styles['footer-wrap']}>
      <Typography variant="caption" as="p">
        &copy; {curYear} Event Finder
      </Typography>
    </footer>
  );
}
