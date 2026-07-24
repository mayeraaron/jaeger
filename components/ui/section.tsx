import { cn } from "@/lib/cn";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  eyebrow?: string;
  title?: string;
  description?: string;
  contentClassName?: string;
};

export function Section({
  className,
  contentClassName,
  eyebrow,
  title,
  description,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-16 sm:py-20 lg:py-24", className)} {...props}>
      {(eyebrow || title || description) && (
        <div className="mb-10 max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-label-text">
              {eyebrow}
            </p>
          ) : null}
          {title ? (
            <h2 className="text-balance text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              {title}
            </h2>
          ) : null}
          {description ? (
            <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-zinc-500 sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
      )}
      <div className={contentClassName}>{children}</div>
    </section>
  );
}
