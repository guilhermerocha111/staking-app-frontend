interface CardProps {
  children: React.ReactNode;
  className?: string;
  styles?: any;
  noCard?: boolean;
}

export default function Card({ children, className, styles, noCard = false }: CardProps) {
  return <div className={`${noCard ? '' : 'card-1'} ${className} z-10`} style={styles}>{children}</div>;
}
