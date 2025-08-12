export function Button({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`rounded-full px-6 py-2 font-semibold text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
