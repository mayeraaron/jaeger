import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { serviceDetails } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Leistungen in Klaus, Vorarlberg",
  description:
    "Leistungen der Jäger GmbH in Klaus, Vorarlberg: Reinigungstechnik, Strahltechnik und Baumaschinen für Unternehmen, Bau und professionelle Anwendungen.",
  path: "/leistungen",
});

export default function LeistungenPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHero
        eyebrow="Leistungen"
        title="Techniklösungen für Reinigung, Oberflächenbearbeitung und Baustelle."
        description="Die Jäger GmbH bündelt ihre Kernkompetenzen in drei klaren Leistungsbereichen. So finden Interessenten schnell den passenden Einstieg und gelangen direkt zu den relevanten Detailinformationen."
      />

      <Container>
        <Section
          eyebrow="Übersicht"
          title="Drei Leistungsbereiche mit klarem Profil."
          description="Die Übersichtsseite dient als strukturierter Einstieg und verlinkt auf die jeweiligen Detailseiten."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {serviceDetails.map((service) => (
              <article key={service.slug}>
                <Card className="flex h-full flex-col p-7 sm:p-8">
                  <div className="mb-5 h-1 w-16 rounded-full bg-brand-500" />
                  <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                    {service.title}
                  </h2>
                  <p className="mt-4 flex-1 text-sm leading-7 text-zinc-600">
                    {service.overviewText}
                  </p>
                  <div className="mt-8">
                    <Button href={service.href} variant="secondary">
                      Bereich öffnen
                    </Button>
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
