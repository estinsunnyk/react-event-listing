import type { JSX } from 'react';
import styles from './typography.module.css';

type TypographyVariant = 'title' | 'subtitle' | 'body' | 'caption';

interface TypographyProps {
  variant?: TypographyVariant;
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
}

export function Typography({
  variant = 'body',
  as,
  children,
  className = '',
}: TypographyProps) {
  const AsElement = as || 'p';
  const classList = `${styles[variant]} ${className}`.trim();

  return <AsElement className={classList}>{children}</AsElement>;
}
