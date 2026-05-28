import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { newsItems } from "@/data/news";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Aktuelles aus Klaus, Vorarlberg",
  description:
    "News, Aktionen und Downloads der Jäger GmbH aus Klaus, Vorarlberg in einem klaren Kartenlayout für Unternehmen und Gewerbe.",
  path: "/aktuelles",
  type: "article",
});

export default function AktuellesPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHero
        eyebrow="Aktuelles"
        title="News, Aktionen und Downloads übersichtlich an einem Ort."
        description="Die Seite ist für eine einfache Pflege über statische Datenobjekte aufgebaut und zeigt Meldungen, Aktionen und PDF-Downloads in einem klaren Kartenlayout."
      />

      <Container>
        <Section
          eyebrow="Beiträge"
          title="Aktuelle Meldungen im kompakten Kartenraster."
          description="Die Inhalte werden zentral in `data/news.ts` gepflegt und können ohne Layout-Anpassungen erweitert oder ausgetauscht werden."
        >
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {newsItems.map((item) => (
              <article key={item.slug}>
                <Card className="flex h-full flex-col p-7 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-500">
                      {item.category}
                    </p>
                    <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">
                      {item.dateLabel}
                    </p>
                  </div>
                  <h2 className="mt-5 text-2xl font-bold tracking-tight text-zinc-900">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-zinc-600">{item.excerpt}</p>
                  <p className="mt-4 flex-1 text-sm leading-7 text-zinc-500">{item.content}</p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    {item.href ? (
                      <Button href={item.href} variant="secondary" size="compact">
                        {item.ctaLabel}
                      </Button>
                    ) : null}
                    {item.pdfHref ? (
                      <Button
                        href={item.pdfHref}
                        size="compact"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.ctaLabel}
                      </Button>
                    ) : null}
                  </div>
                </Card>
              </article>
            ))}
          </div>
        </Section>
      </Container>
    </main>
  );
}
