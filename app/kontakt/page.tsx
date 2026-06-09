import type { Metadata } from "next";

import { ContactDetails } from "@/components/company/contact-details";
import { ContactForm } from "@/components/contact/contact-form";
import { ImagePlaceholder } from "@/components/services/image-placeholder";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { companyDetails } from "@/data/company";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Kontakt in Klaus, Vorarlberg",
  description:
    "Kontakt zur Jäger GmbH in Klaus, Vorarlberg mit Telefonnummer, E-Mail, Adresse, Öffnungszeiten und Kontaktformular.",
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHero
        eyebrow="Kontakt"
        title="Direkter Kontakt für Anfragen, Beratung und technische Abstimmung."
        description="Die Jäger GmbH ist schnell erreichbar und setzt auf klare Kommunikation. Ob Leistungsanfrage, Mietmaschine oder allgemeine Rückfrage: Telefon, E-Mail und Kontaktformular sind auf mobilen Geräten ebenso direkt nutzbar wie am Desktop."
        actions={
          <>
            <Button href={companyDetails.phoneHref}>Jetzt anrufen</Button>
            <Button href={companyDetails.emailHref} variant="secondary">
              E-Mail senden
            </Button>
          </>
        }
        aside={
          <Card className="p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-500">
              Kontakt auf einen Blick
            </p>
            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">Telefon</p>
                <p className="mt-2 break-all text-base font-bold text-zinc-900 sm:text-xl">{companyDetails.phone}</p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">E-Mail</p>
                <p className="mt-2 break-all text-base font-bold text-zinc-900 sm:text-xl">{companyDetails.email}</p>
              </div>
            </div>
          </Card>
        }
      />

      <Container>
        <Section
          eyebrow="Kontaktinformationen"
          title="Alle wichtigen Informationen direkt sichtbar."
          description="Die Kontaktangaben sind bewusst prominent platziert und in mobilen Ansichten leicht erfassbar."
        >
          <ContactDetails className="xl:max-w-none" cardClassName="p-7" />
        </Section>

        <Section
          eyebrow="Anfrage"
          title="Kontaktformular für schnelle Anfragen."
          description="Das Formular ist als klarer, mobiler Einstieg für Anfragen vorbereitet und kann später an eine Backend- oder Mail-Lösung angebunden werden."
        >
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.78fr)]">
            <div className="space-y-6">
              <ContactForm />
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button href={companyDetails.phoneHref} variant="secondary">
                  Lieber telefonisch
                </Button>
              </div>
            </div>
            <Card className="flex flex-col justify-between p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-500">
                  Starker CTA
                </p>
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-zinc-900">
                  Persönlich sprechen ist oft der schnellste Weg zur passenden Lösung.
                </h2>
              </div>
              <p className="mt-6 text-sm leading-7 text-zinc-600">
                Besonders bei technischen Rückfragen, Mietanfragen oder konkreten
                Projektanforderungen lohnt sich die direkte Abstimmung mit dem Team der Jäger
                GmbH.
              </p>
              <div className="mt-8">
                <Button href={companyDetails.phoneHref}>{companyDetails.phone}</Button>
              </div>
            </Card>
          </div>
        </Section>

        <Section
          eyebrow="Standort"
          title="Karten-Platzhalter für Anfahrt und Lage."
          description="Der Bereich ist vorbereitet, um später eine eingebettete Karte oder eine statische Lagegrafik zu integrieren."
        >
          <ImagePlaceholder label="Karten-Platzhalter Standort Jäger GmbH" eyebrow="Karte" />
        </Section>
      </Container>
    </main>
  );
}
