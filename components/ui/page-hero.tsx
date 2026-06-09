import Link from "next/link";

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
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
            <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
          </svg>
          Zur Startseite
        </Link>
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
