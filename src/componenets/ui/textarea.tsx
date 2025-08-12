export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className="w-full p-3 rounded-lg bg-[#1f2a48] text-white placeholder-gray-400 focus:outline-none"
      rows={4}
      {...props}
    />
  );
}
