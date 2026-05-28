import type { Metadata } from "next";

import { companyDetails } from "@/data/company";
import { LegalPage } from "@/components/legal/legal-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Impressum",
  description:
    "Impressum der Jäger GmbH mit Anbieterkennzeichnung und rechtlichen Unternehmensangaben für den Standort Klaus, Vorarlberg.",
  path: "/impressum",
});

export default function ImpressumPage() {
  return (
    <LegalPage
      eyebrow="Rechtliches"
      title="Impressum"
      description="Übersicht der Anbieterkennzeichnung und rechtlich relevanten Stammdaten der Jäger GmbH in einer klar gegliederten, gut lesbaren Struktur."
      sections={[
        {
          heading: "Angaben gemäß Unternehmensauftritt",
          paragraphs: [
            `${companyDetails.name}`,
            `${companyDetails.address[0]}, ${companyDetails.address[1]}, ${companyDetails.address[2]}`,
            `Telefon: ${companyDetails.phone} | E-Mail: ${companyDetails.email}`,
          ],
        },
        {
          heading: "Unternehmensgegenstand",
          paragraphs: [
            "Die Jäger GmbH ist im Bereich Reinigungstechnik, Strahltechnik, Baumaschinen und Mietlösungen tätig und richtet ihr Angebot an gewerbliche, baunahe und kommunale Einsatzbereiche.",
            "Diese Seite dient als sauber strukturierte Impressumsgrundlage und kann im nächsten Schritt mit den verbindlichen Unternehmensdaten, Firmenbuchangaben und vertretungsbefugten Personen ergänzt werden.",
          ],
        },
        {
          heading: "Verantwortung für den Inhalt",
          paragraphs: [
            "Für den Inhalt dieser Website ist die Jäger GmbH verantwortlich. Die Inhalte werden mit Sorgfalt gepflegt, dienen jedoch in dieser Projektphase noch als vorbereitete Struktur für die finalen Rechtstexte.",
            "Bitte ergänzen Sie hier bei Bedarf konkrete Angaben zu Geschäftsführung, Firmenbuchnummer, UID-Nummer, Aufsichtsbehörde oder Kammerzugehörigkeit.",
          ],
        },
        {
          heading: "Haftungshinweis",
          paragraphs: [
            "Alle Angaben auf dieser Website wurden mit dem Ziel erstellt, das Unternehmen und seine Leistungen nachvollziehbar darzustellen. Eine Gewähr für Vollständigkeit, Aktualität und rechtliche Vollständigkeit der hier vorbereiteten Musterinhalte wird in dieser Fassung nicht übernommen.",
            "Sobald die finalen Rechtstexte vorliegen, können sie in diese Struktur ohne weitere Layout-Anpassungen eingepflegt werden.",
          ],
        },
      ]}
    />
  );
}
