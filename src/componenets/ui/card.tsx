export function Card({ children, className = "" }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`rounded-2xl shadow-md ${className}`}>{children}</div>;
}

export function CardContent({ children, className = "" }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
