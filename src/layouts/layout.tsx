import styles from './layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className={styles['app-layout']}>
      <main>{children}</main>
    </div>
  );
}
