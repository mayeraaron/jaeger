import { ContactDetails } from "@/components/company/contact-details";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { companyDetails } from "@/data/company";
import type { ServiceDetail } from "@/data/services";

import { ImagePlaceholder } from "./image-placeholder";

type ServiceDetailPageProps = {
  service: ServiceDetail;
};

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  return (
    <main id="main-content" className="flex-1">
      <PageHero
        eyebrow={service.eyebrow}
        title={service.heroTitle}
        description={service.heroText}
        actions={
          <>
            <Button href="/kontakt">Beratung anfragen</Button>
            <Button href={companyDetails.phoneHref} variant="secondary">
              Jetzt anrufen
            </Button>
          </>
        }
        aside={<ImagePlaceholder label={service.imageLabel} eyebrow={service.shortTitle} />}
      />

      <Container>
        <Section
          eyebrow="Leistungsbeschreibung"
          title={`${service.title} für professionelle Anforderungen.`}
          description="Die Inhalte sind bewusst klar gegliedert, damit Interessenten den Nutzen und die Einsatzmöglichkeiten rasch erfassen können."
        >
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.8fr)]">
            <article className="space-y-6 rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
              {service.description.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-zinc-600 sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </article>
            <aside className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-8">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                Warum dieser Bereich wichtig ist
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                Unternehmen benötigen Technik, die nicht nur verfügbar ist, sondern im
                Arbeitsalltag verlässlich funktioniert und wirtschaftlich eingesetzt werden kann.
              </p>
            </aside>
          </div>
        </Section>

        <Section
          eyebrow="Nutzen"
          title="Vorteile auf einen Blick."
          description="Die wichtigsten Argumente werden kompakt und gut lesbar dargestellt."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {service.benefits.map((benefit) => (
              <Card key={benefit} className="p-7">
                <div className="mb-5 h-1 w-16 rounded-full bg-brand-500" />
                <h3 className="text-xl font-bold text-zinc-900">{benefit}</h3>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Einsatzgebiete"
          title="Typische Anwendungsbereiche."
          description="Die Leistungsseite zeigt nicht nur das Angebot, sondern auch, wo die Technik in der Praxis sinnvoll eingesetzt wird."
        >
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.82fr)]">
            <article className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                Typische Einsatzgebiete
              </h2>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-zinc-600 sm:text-base">
                {service.useCases.map((useCase) => (
                  <li
                    key={useCase}
                    className="rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4"
                  >
                    {useCase}
                  </li>
                ))}
              </ul>
            </article>
            <ImagePlaceholder label={`${service.title} im Einsatz`} eyebrow="Einsatzbild" />
          </div>
        </Section>

        <Section
          eyebrow="Kontakt"
          title="Projekt besprechen und passende Lösung abstimmen."
          description="Die Call-to-Action schließt die Seite klar und vertrauenswürdig ab."
        >
          <Card className="grid gap-8 p-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)]">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                Direkter Kontakt zur Jäger GmbH
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600">
                Für Fragen zu {service.title.toLowerCase()}, Verfügbarkeit oder zur passenden
                Gerätelösung steht die Jäger GmbH persönlich zur Verfügung.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="/kontakt">Anfrage senden</Button>
                <Button href={companyDetails.emailHref} variant="secondary">
                  E-Mail schreiben
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
