import type { Metadata } from "next";

import { ContactDetails } from "@/components/company/contact-details";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { companyDetails } from "@/data/company";
import { newsItems } from "@/data/news";
import { rentalBenefits, rentalHighlights } from "@/data/rental";
import { serviceCards } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Startseite",
  description:
    "Jäger GmbH in Klaus, Vorarlberg: Reinigungstechnik, Strahltechnik, Baumaschinen und Mietpark mit persönlicher Beratung für Unternehmen, Bau und Gewerbe.",
  path: "/",
});

const trustPillars = [
  {
    title: "Firmengeschichte",
    text: "Die Jäger GmbH steht seit vielen Jahren für verlässliche Techniklösungen und eine Beratung, die sich am realen Einsatz orientiert.",
  },
  {
    title: "Regional verankert",
    text: "Mit Standort in Klaus, Vorarlberg ist das Unternehmen nah an seinen Kunden und kennt die Anforderungen von Betrieben, Bau und Kommunen.",
  },
  {
    title: "Langjährige Erfahrung",
    text: "Praxiswissen aus Reinigungstechnik, Strahltechnik und Baumaschinen sorgt für passende Empfehlungen statt Standardlösungen.",
  },
];

export default function Home() {
  return (
    <main id="main-content" className="flex-1">
      <section className="relative flex min-h-screen items-center">
        <div className="absolute inset-0 bg-zinc-900">
          <div className="industrial-grid absolute inset-0 opacity-20" aria-hidden="true" />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/65 to-zinc-900/50"
          aria-hidden="true"
        />

        <Container className="relative z-10 py-20 sm:py-28">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/35 bg-brand-500/10 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-400">
              Ihr Partner für Baumaschinen
            </span>
          </div>

          <h1 className="text-[clamp(2.8rem,8.5vw,7.5rem)] font-black uppercase leading-[0.88] tracking-tight">
            <span className="block text-white">REINIGUNGSTECHNIK</span>
            <span className="block text-brand-500">BAUMASCHINEN</span>
            <span className="block text-white">MIETPARK</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
            Ihr zuverlässiger Partner für Baumaschinen, Reinigungstechnik, Strahltechnik und
            Industriereinigung in Österreich.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/leistungen">Unsere Leistungen →</Button>
            <Button href="/mietpark" variant="outline">
              Mietpark entdecken
            </Button>
          </div>
        </Container>
      </section>

      <Container>
        <Section
          id="leistungen"
          eyebrow="Kernbereiche"
          title="Drei Leistungsfelder für den professionellen Alltag."
          description="Die Jäger GmbH unterstützt Betriebe und Projekte mit Technik, die auf Wirtschaftlichkeit, Robustheit und praxistaugliche Abläufe ausgelegt ist."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {serviceCards.map((service) => (
              <article key={service.title}>
                <Card className="flex h-full flex-col p-7 sm:p-8">
                  <div className="mb-5 h-1 w-16 rounded-full bg-brand-500" />
                  <h3 className="text-xl font-bold text-zinc-900">{service.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-zinc-600">{service.text}</p>
                  <div className="mt-6">
                    <Button href={service.href} variant="ghost" size="compact">
                      Mehr erfahren
                    </Button>
                  </div>
                </Card>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="ueber-uns"
          eyebrow="Vertrauen"
          title="Regional präsent, fachlich stark und auf langfristige Zusammenarbeit ausgerichtet."
          description="Die Startseite vermittelt Seriosität und technische Kompetenz und schafft damit eine glaubwürdige Grundlage für moderne B2B-Kommunikation."
        >
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(300px,0.76fr)]">
            <Card className="p-8">
              <p className="max-w-2xl text-lg leading-8 text-zinc-700">
                Als Ansprechpartner für Reinigungstechnik, Strahltechnik, Baumaschinen und
                Mietlösungen verbindet die Jäger GmbH regionale Nähe mit langjähriger
                Branchenerfahrung. Das schafft Vertrauen bei Kunden, die rasche Abstimmung,
                klare Empfehlungen und verlässliche Technik erwarten.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {trustPillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5"
                  >
                    <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-brand-500">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-600">{pillar.text}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="flex flex-col justify-between p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-500">
                  Standortvorteil
                </p>
                <h3 className="mt-4 text-2xl font-bold text-zinc-900">
                  Kurze Wege, direkte Ansprechpartner und Lösungen, die im Einsatz bestehen.
                </h3>
              </div>
              <p className="mt-6 text-sm leading-7 text-zinc-600">
                Die regionale Verankerung in Vorarlberg sorgt für Nähe zum Markt und für eine
                Beratung, die Anforderungen aus Industrie, Bau und kommunalem Umfeld realistisch
                einordnet.
              </p>
            </Card>
          </div>
        </Section>

        <Section
          id="mietpark"
          eyebrow="Mietpark"
          title="Große Auswahl an Mietmaschinen für planbare und kurzfristige Einsätze."
          description="Der Mietpark ergänzt das Produktspektrum ideal und bietet Unternehmen die nötige Flexibilität, wenn Technik schnell verfügbar sein muss."
        >
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)]">
            <Card className="p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                Mietlösungen mit System
              </p>
              <h3 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight text-white">
                Von Reinigungsgeräten über Strahltechnik bis zu Baumaschinen steht eine breite
                Auswahl an Mietmaschinen für unterschiedliche Einsatzbereiche bereit.
              </h3>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {rentalHighlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-sm text-slate-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="flex flex-col justify-between bg-gradient-to-br from-slate-900 to-slate-950 p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-500">
                  Schnell verfügbar
                </p>
                <h3 className="mt-4 text-2xl font-bold text-zinc-900">
                  Mietmaschinen für kurzfristige Anforderungen und sauber planbare Einsätze.
                </h3>
              </div>
              <ul className="mt-8 space-y-3">
                {rentalBenefits.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-slate-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/mietpark" variant="secondary">
                  Zum Mietpark
                </Button>
              </div>
            </Card>
          </div>
        </Section>

        <Section
          id="aktuelles"
          eyebrow="Aktuelles"
          title="Neuigkeiten aus Mietpark, Sortiment und Beratung."
          description="Die Sektion schafft Platz für aktuelle Hinweise und macht sichtbar, dass sich Maschinenbestand und Lösungen laufend weiterentwickeln."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            {newsItems.slice(0, 2).map((item, index) => (
              <article key={item.title}>
                <Card className="flex h-full flex-col">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-500">
                    Aktuell {index + 1}
                  </p>
                  <h3 className="mt-4 text-2xl font-bold text-zinc-900">{item.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-zinc-600">{item.excerpt}</p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    {item.href ? (
                      <Button href={item.href} variant="ghost" size="compact">
                        {item.ctaLabel}
                      </Button>
                    ) : null}
                    {item.pdfHref ? (
                      <Button
                        href={item.pdfHref}
                        variant="ghost"
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
          <div className="mt-8">
            <Button href="/aktuelles" variant="secondary">
              Alle Beiträge ansehen
            </Button>
          </div>
        </Section>

        <Section
          id="kontakt"
          eyebrow="Kontakt"
          title="Schnell erreichbar für Anfragen, Beratung und Mietmaschinen."
          description="Telefon, E-Mail, Adresse und Öffnungszeiten sind direkt auf der Startseite präsent, damit Interessenten ohne Umwege Kontakt aufnehmen können."
        >
          <Card className="grid gap-8 p-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.95fr)]">
            <div>
              <h2 className="text-2xl font-bold text-zinc-900">
                Persönliche Beratung für Technik, Maschinen und Mietlösungen.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600">
                Ob Reinigungstechnik, Strahltechnik, Baumaschine oder Mietgerät: Die Jäger
                GmbH unterstützt mit klaren Ansprechpartnern und einer schnellen Erstabstimmung.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href={companyDetails.phoneHref}>{companyDetails.phone}</Button>
                <Button href={companyDetails.emailHref} variant="secondary">
                  {companyDetails.email}
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
