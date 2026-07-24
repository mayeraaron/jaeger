import type { Metadata } from "next";

import {
  companyHistory,
  companyValues,
  partnerHighlights,
  regionalStrengths,
  trustFactors,
} from "@/data/about";
import { ImagePlaceholder } from "@/components/services/image-placeholder";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Über uns in Klaus, Vorarlberg",
  description:
    "Erfahren Sie mehr über die Jäger GmbH in Klaus, Vorarlberg: Firmengeschichte, Werte, regionale Verankerung und vertrauensvolle Zusammenarbeit.",
  path: "/ueber-uns",
});

export default function UeberUnsPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHero
        eyebrow="Über uns"
        title="Technische Kompetenz mit regionaler Nähe und verlässlicher Haltung."
        description="Die Jäger GmbH steht für eine klare Arbeitsweise, direkte Kommunikation und ein Leistungsprofil, das sich an den Anforderungen von Betrieben, Bau und kommunalen Anwendungen orientiert."
        actions={
          <>
            <Button href="/kontakt">Kontakt aufnehmen</Button>
            <Button href="/leistungen" variant="secondary">
              Leistungen ansehen
            </Button>
          </>
        }
        aside={
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <div className="relative aspect-[5/2]">
              <Image
                src="/images/gebaeude.webp"
                alt="Jäger GmbH Firmengebäude in Klaus, Vorarlberg"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
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
        }
      />

      <Container>
        <Section
          eyebrow="Firmengeschichte"
          title="Entwicklung mit Fokus auf Praxis und Verlässlichkeit."
          description="Die Firmengeschichte wird in klaren Absätzen erzählt und baut Vertrauen über Kontinuität und Erfahrung auf."
        >
          <article className="rounded-[2rem] border border-zinc-200 bg-white shadow-sm p-8">
            <div className="space-y-6">
              {companyHistory.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-zinc-600 sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </Section>

        <Section
          eyebrow="Werte"
          title="Drei Grundsätze, die die Zusammenarbeit prägen."
          description="Der Wertebereich macht die Haltung des Unternehmens sichtbar und stärkt die Glaubwürdigkeit im B2B-Kontext."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {companyValues.map((value) => (
              <Card key={value.title} className="p-7 sm:p-8">
                <div className="mb-5 h-1 w-16 rounded-full bg-brand-500" />
                <h3 className="text-xl font-bold text-zinc-900">{value.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-600">{value.text}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Regional verankert"
          title="In Klaus, Vorarlberg verortet, nah an den Anforderungen der Kunden."
          description="Regionale Verankerung bedeutet kurze Wege, direkte Abstimmung und ein gutes Verständnis für reale Einsatzbedingungen."
        >
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.78fr)]">
            <article className="rounded-[2rem] border border-zinc-200 bg-white shadow-sm p-8">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                Regionale Stärke
              </h2>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-zinc-600 sm:text-base">
                {regionalStrengths.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <ImagePlaceholder label="Karten- oder Standortbild" eyebrow="Region" />
          </div>
        </Section>

        <Section
          eyebrow="Vertrauen"
          title="Vertrauen entsteht durch nachvollziehbare Leistung."
          description="Der Vertrauensbereich bündelt die stärksten Argumente für eine langfristige Zusammenarbeit."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {trustFactors.map((factor) => (
              <Card key={factor} className="p-7">
                <h3 className="text-xl font-bold text-zinc-900">{factor}</h3>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Team & Partner"
          title="Vorbereiteter Bereich für Ansprechpartner, Team oder Partnernetzwerk."
          description="Dieser Abschnitt ist bereits als professionelle Platzhalterstruktur angelegt und kann später mit echten Personen, Partnern oder Referenzen befüllt werden."
        >
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.82fr)]">
            <article className="rounded-[2rem] border border-zinc-200 bg-white shadow-sm p-8">
              <ul className="space-y-4 text-sm leading-7 text-zinc-600 sm:text-base">
                {partnerHighlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <ImagePlaceholder label="Bildblock Team oder Partner" eyebrow="Optional" />
          </div>
        </Section>
      </Container>
    </main>
  );
}
