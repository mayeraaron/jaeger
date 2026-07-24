import type { Metadata } from "next";

import { ContactDetails } from "@/components/company/contact-details";
import { ImagePlaceholder } from "@/components/services/image-placeholder";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { companyDetails } from "@/data/company";
import { rentalAdvantages, rentalCategories } from "@/data/rental";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Mietpark in Klaus, Vorarlberg",
  description:
    "Mietpark der Jäger GmbH in Klaus, Vorarlberg mit flexiblen Mietlösungen, Maschinenkategorien und Download der Mietpreisliste.",
  path: "/mietpark",
});

export default function MietparkPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHero
        eyebrow="Mietpark"
        title="Mietmaschinen für kurzfristige Einsätze und langfristig planbare Projekte."
        description="Die Jäger GmbH bietet einen modernen Mietpark für Unternehmen, Bauprojekte und kommunale Anwendungen. Ob kurzfristiger Bedarf oder längerfristige Vermietung: Entscheidend sind Verfügbarkeit, klare Abstimmung und passende Technik für den tatsächlichen Einsatz."
        actions={
          <>
            <Button href="/kontakt">Mietanfrage senden</Button>
            <Button href={companyDetails.phoneHref} variant="secondary">
              Telefonisch anfragen
            </Button>
          </>
        }
        aside={<ImagePlaceholder label="Bildblock Mietpark" eyebrow="Maschinen & Vermietung" />}
      />

      <Container>
        <Section
          eyebrow="Vermietung"
          title="Mietlösungen mit klarem Nutzen für kurz- und langfristige Anforderungen."
          description="Die Mietpark-Seite ist auf B2B-Entscheider ausgerichtet und stellt Verfügbarkeit, Wirtschaftlichkeit und Planungssicherheit in den Vordergrund."
        >
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.84fr)]">
            <article className="rounded-[2rem] border border-zinc-200 bg-white shadow-sm p-8">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                Technik mieten statt Verfügbarkeit riskieren
              </h2>
              <p className="mt-4 text-base leading-8 text-zinc-600 sm:text-lg">
                Wenn Maschinen rasch benötigt werden oder Projekte zusätzlichen Bedarf
                erzeugen, schafft der Mietpark der Jäger GmbH eine direkte und wirtschaftliche
                Lösung. So bleiben Betriebe flexibel, ohne bei Qualität oder Einsatzbereitschaft
                Kompromisse eingehen zu müssen.
              </p>
            </article>
            <Card className="p-8">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-label-text">
                Für jeden Horizont
              </p>
              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                  <h3 className="text-xl font-bold text-zinc-900">Kurzfristige Vermietung</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    Für akuten Bedarf, Ausfälle, Zusatzkapazitäten oder zeitkritische Einsätze.
                  </p>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                  <h3 className="text-xl font-bold text-zinc-900">Langfristige Vermietung</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    Für länger laufende Projekte, saisonale Anforderungen oder planbare
                    Maschinennutzung über definierte Zeiträume.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </Section>

        <Section
          eyebrow="Vorteile"
          title="Warum Miete für viele Projekte die bessere Lösung ist."
          description="Der Abschnitt transportiert die wirtschaftlichen und organisatorischen Vorteile einer professionellen Mietlösung."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {rentalAdvantages.map((advantage) => (
              <Card key={advantage.title} className="p-7 sm:p-8">
                <div className="mb-5 h-1 w-16 rounded-full bg-brand-500" />
                <h3 className="text-xl font-bold text-zinc-900">{advantage.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-600">{advantage.text}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Mietkategorien"
          title="Übersichtliche Kategorien für unterschiedliche Einsatzbereiche."
          description="Das Kartenraster ist bewusst klar und scanbar aufgebaut, damit Interessenten schnell zu passenden Maschinenbereichen finden."
        >
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {rentalCategories.map((category) => (
              <article key={category.title}>
                <Card className="flex h-full flex-col p-7">
                  <div className="mb-5 h-1 w-16 rounded-full bg-brand-500" />
                  <h3 className="text-xl font-bold text-zinc-900">{category.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-600">{category.text}</p>
                </Card>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Download"
          title="Mietpreisliste direkt als PDF herunterladen."
          description="Der Download-Bereich schafft einen schnellen Zugang zu Preis- und Übersichtsunterlagen."
        >
          <Card className="grid gap-8 p-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.72fr)]">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                Mietpreisliste der Jäger GmbH
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600">
                Die aktuelle Übersicht ist als PDF vorbereitet und kann direkt heruntergeladen
                werden. Für konkrete Verfügbarkeiten und projektbezogene Konditionen empfiehlt
                sich die direkte Abstimmung mit dem Team der Jäger GmbH.
              </p>
            </div>
            <div className="flex items-center justify-start lg:justify-end">
              <Button
                href="/downloads/jaeger-mietpreisliste.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                PDF herunterladen
              </Button>
            </div>
          </Card>
        </Section>

        <Section
          eyebrow="Anfrage"
          title="Mietmaschine anfragen und passenden Einsatz abstimmen."
          description="Der Abschlussbereich führt Interessenten klar zur Kontaktaufnahme per Formular oder Telefon."
        >
          <Card className="grid gap-8 p-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.88fr)]">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                Direkter Weg zur Mietanfrage
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600">
                Für konkrete Mietanfragen, Verfügbarkeiten und Einsatzzeiträume kann die
                Anfrage bequem über das Kontaktformular vorbereitet oder direkt telefonisch
                abgestimmt werden.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="/kontakt">Zum Kontaktformular</Button>
                <Button href={companyDetails.phoneHref} variant="secondary">
                  {companyDetails.phone}
                </Button>
              </div>
            </div>
            <ContactDetails />
          </Card>
        </Section>
      </Container>
    </main>
  );
}
