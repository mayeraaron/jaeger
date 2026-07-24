import type { Metadata } from "next";

import { ContactDetails } from "@/components/company/contact-details";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { companyDetails } from "@/data/company";
import { rentalHighlights } from "@/data/rental";
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
    title: "Seit 1977",
    text: "Die Jäger GmbH wurde 1977 von Hubert Jäger gegründet und hat sich zu einem der führenden Anbieter für Oberflächenbehandlung und Industriereinigung in Österreich entwickelt.",
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
      <section className="relative flex min-h-screen items-center overflow-hidden border-b border-zinc-200 bg-white">
        <div className="industrial-grid absolute inset-0 opacity-[0.045]" aria-hidden="true" />
        <div
          className="absolute -right-20 -top-20 h-[200px] w-[200px] rounded-full bg-brand-500/10 blur-3xl sm:-right-40 sm:-top-40 sm:h-[700px] sm:w-[700px] sm:bg-brand-500/20"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-16 -left-16 h-[150px] w-[150px] rounded-full bg-brand-500/10 blur-3xl sm:-bottom-32 sm:-left-32 sm:h-[500px] sm:w-[500px]"
          aria-hidden="true"
        />

        <Container className="relative z-10 py-20 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_480px]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-900">
                  Ihr Partner für Baumaschinen
                </span>
              </div>

              <h1 className="flex flex-col gap-2 text-[clamp(1rem,7vw,7.5rem)] font-black uppercase leading-none tracking-tight">
                <span className="text-zinc-900">REINIGUNGSTECHNIK</span>
                <span>
                  <span className="inline-block bg-brand-500 px-4 py-2 text-zinc-900">
                    BAUMASCHINEN
                  </span>
                </span>
                <span className="text-zinc-900">MIETPARK</span>
              </h1>

              <p className="mt-10 max-w-xl text-lg leading-relaxed text-zinc-600 sm:text-xl">
                Wir sind Ihr zuverlässiger Partner für Baumaschinen, Reinigungstechnik, Strahltechnik
                und Industriereinigung. Mit langjähriger Branchenerfahrung bieten wir Geräte nach
                höchsten Standards und individuellem Service.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button href="/leistungen">Unsere Leistungen →</Button>
                <Button href="/mietpark" variant="secondary">
                  Mietpark entdecken
                </Button>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <div className="relative aspect-[5/2]">
                  <Image
                    src="/images/gebaeude.webp"
                    alt="Jäger GmbH Firmengebäude in Klaus, Vorarlberg"
                    fill
                    sizes="480px"
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/20 to-transparent px-6 py-5">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-label-text">
                      Jäger GmbH
                    </p>
                    <p className="mt-1 text-sm text-white">Treietstraße 2a · Klaus, Vorarlberg</p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-500" />
                </div>
              </div>
            </div>
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
                    <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-label-text">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-600">{pillar.text}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="flex flex-col justify-between p-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-label-text">
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
          title="Mietpark mit über 100 Maschinen für kurzfristige und planbare Einsätze."
          description="Mit unserer flexiblen Mietlösung können Sie genau die Ausrüstung nutzen, die Sie benötigen – genau dann, wenn Sie sie brauchen."
        >
          <Card className="p-8">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-label-text">
              Mietlösungen mit System
            </p>
            <h3 className="mt-4 max-w-3xl text-2xl font-semibold tracking-tight text-zinc-900">
              Von Reinigungsgeräten über Strahltechnik bis zu Baumaschinen steht eine breite
              Auswahl an Mietmaschinen für unterschiedliche Einsatzbereiche bereit.
            </h3>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {rentalHighlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-zinc-700">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
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
