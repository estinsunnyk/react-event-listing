import { Header } from '../components/header';
import { Footer } from '../components/footer';
import styles from './layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className={styles['app-layout']}>
      <Header />
      <main className={styles['content-wrap']}>{children}</main>
      <Footer />
    </div>
  );
}
