import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "AGB",
  description:
    "Allgemeine Geschäftsbedingungen der Jäger GmbH als gut lesbare Inhaltsseite für Leistungen und Mietlösungen in Klaus, Vorarlberg.",
  path: "/agb",
});

export default function AgbPage() {
  return (
    <LegalPage
      eyebrow="Rechtliches"
      title="AGB"
      description="Vorbereitete Inhaltsseite für Allgemeine Geschäftsbedingungen mit klarer Typografie, sinnvoller Gliederung und guter Lesbarkeit auf allen Bildschirmgrößen."
      sections={[
        {
          heading: "Geltungsbereich",
          paragraphs: [
            "Diese Seite ist als strukturierte Grundlage für die Allgemeinen Geschäftsbedingungen der Jäger GmbH angelegt. Sie eignet sich für Leistungen in den Bereichen Reinigungstechnik, Strahltechnik, Baumaschinen und Mietlösungen.",
            "In der finalen Fassung sollte hier präzise definiert werden, für welche Verträge, Leistungen und Kundengruppen die Bedingungen gelten und welche abweichenden Vereinbarungen Vorrang haben.",
          ],
        },
        {
          heading: "Angebote und Vertragsabschluss",
          paragraphs: [
            "Angebote können je nach Leistungsbereich freibleibend und unverbindlich sein, sofern sie nicht ausdrücklich als bindend bezeichnet werden. Maßgeblich sind immer die individuell vereinbarten Leistungen und Konditionen.",
            "Für die finale rechtliche Version sollten hier Regeln zu Angebotsdauer, Annahme, Auftragsbestätigung und projektbezogenen Abweichungen ergänzt werden.",
          ],
        },
        {
          heading: "Leistung, Lieferung und Vermietung",
          paragraphs: [
            "Je nach Geschäftsbereich können Verkauf, Bereitstellung, Vermietung oder projektbezogene Leistungserbringung unterschiedliche Bedingungen erfordern. Diese sollten in den endgültigen AGB klar voneinander abgegrenzt werden.",
            "Insbesondere für Mietlösungen empfiehlt sich eine gesonderte Regelung zu Mietdauer, Verfügbarkeit, Rückgabezustand, Haftung und eventuellen Zusatzkosten.",
          ],
        },
        {
          heading: "Zahlung und Fälligkeit",
          paragraphs: [
            "Für Rechnungen, Zahlungsfristen, Teilabrechnungen und Verzugsfolgen sollte eine eindeutige und rechtlich geprüfte Regelung vorgesehen werden. Dasselbe gilt für projektbezogene Zusatzleistungen oder kurzfristige Erweiterungen eines Leistungsumfangs.",
            "Die vorbereitete Seite bietet ausreichend Raum, um spätere Zahlungsbedingungen sauber in Abschnitten und Absätzen darzustellen.",
          ],
        },
        {
          heading: "Schlussbestimmungen",
          paragraphs: [
            "Abschließende Regelungen betreffen häufig Gerichtsstand, anwendbares Recht, salvatorische Klauseln und individuelle Ergänzungen für einzelne Geschäftsbereiche.",
            "Vor Veröffentlichung sollten die AGB von einer fachkundigen Stelle geprüft und in diese vorbereitete Struktur final eingearbeitet werden.",
          ],
        },
      ]}
    />
  );
}
