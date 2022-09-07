interface CardProps {
  children: React.ReactNode;
  className?: string;
  styles?: any;
}

export default function Card({ children, className, styles }: CardProps) {
  return <div className={`card-1 ${className} z-10`} style={styles}>{children}</div>;
}
