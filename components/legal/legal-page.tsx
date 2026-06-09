import Link from "next/link";

import { Container } from "@/components/ui/container";

type LegalSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  sections: LegalSection[];
};

export function LegalPage({ eyebrow, title, description, sections }: LegalPageProps) {
  return (
    <main id="main-content" className="flex-1">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
              <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
            </svg>
            Zur Startseite
          </Link>
          <header className="mb-12 border-b border-zinc-200 pb-10 sm:mb-14 sm:pb-12">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-brand-500">
              {eyebrow}
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-600 sm:text-lg">
              {description}
            </p>
          </header>

          <article className="rounded-[2rem] border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            <div className="space-y-10 sm:space-y-12">
              {sections.map((section) => (
                <section key={section.heading} className="space-y-4">
                  <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                    {section.heading}
                  </h2>
                  <div className="space-y-4">
                    {section.paragraphs?.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="max-w-none text-[15px] leading-8 text-zinc-600 sm:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}
                    {section.list && (
                      <ul className="space-y-2 pl-1">
                        {section.list.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-[15px] leading-7 text-zinc-600 sm:text-base"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </Container>
    </main>
  );
}
