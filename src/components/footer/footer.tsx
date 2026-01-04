import { Typography } from '../../lib/typography';
import styles from './footer.module.css';

export function Footer() {
  return (
    <footer className={styles['footer-wrap']}>
      <Typography variant="caption" as="p">
        Event liting app
      </Typography>
    </footer>
  );
}
