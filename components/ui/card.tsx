import { cn } from "@/lib/cn";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "group rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-0.5 hover:border-brand-500/50 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] focus-within:border-brand-500/60",
        className,
      )}
      {...props}
    />
  );
}
