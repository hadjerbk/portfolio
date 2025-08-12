export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="w-full p-3 rounded-lg bg-[#1f2a48] text-white placeholder-gray-400 focus:outline-none"
      {...props}
    />
  );
}
