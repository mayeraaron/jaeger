import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: React.ReactNode;
  aside?: React.ReactNode;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  aside,
  className,
}: PageHeroProps) {
  return (
    <section className="border-b border-zinc-200 bg-zinc-50">
      <Container className={cn("relative py-16 sm:py-20 lg:py-24", className)}>
        <div
          className={cn(
            "gap-10 lg:items-end",
            aside
              ? "grid lg:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.82fr)]"
              : "block",
          )}
        >
          <header className="max-w-4xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-brand-500">
              {eyebrow}
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-zinc-600 sm:text-xl">
              {description}
            </p>
            {actions ? <div className="mt-10 flex flex-col gap-4 sm:flex-row">{actions}</div> : null}
          </header>
          {aside ? <div>{aside}</div> : null}
        </div>
      </Container>
    </section>
  );
}
