import type { Metadata } from "next";

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
      description="Informationen und Offenlegung gemäß §5 (1) ECG, § 25 MedienG, § 63 GewO und § 14 UGB"
      sections={[
        {
          heading: "Webseitenbetreiber",
          paragraphs: [
            "Jäger GmbH",
            "Treietstraße 2a, 6833 Klaus",
            "Firmenbuchnummer: FN 200291 x",
            "Firmenbuchgericht: Landesgericht Feldkirch",
            "UID-Nr: ATU50139103",
            "Gewerbeaufsichtsbehörde: Bezirkshauptmannschaft Feldkirch",
            "Mitgliedschaften: WKV, WKÖ",
          ],
        },
        {
          heading: "Kontaktdaten",
          paragraphs: [
            "Telefon: 05523 62726-0",
            "Fax: 05523 62726-22",
            "Email: office@jaeger.at",
          ],
        },
        {
          heading: "Anwendbare Rechtsvorschrift",
          paragraphs: [
            "www.ris.bka.gv.at",
          ],
        },
        {
          heading: "Online Streitbeilegung",
          paragraphs: [
            "Verbraucher mit Sitz in Österreich oder einem sonstigen Vertragsstaat der ODR-VO haben die Möglichkeit, Probleme bezüglich dem entgeltlichen Kauf von Waren oder Dienstleistungen im Rahmen einer Online-Streitbeilegung (nach OS, AStG) zu lösen.",
            "Die Europäische Kommission stellt eine Plattform hierfür bereit: https://ec.europa.eu/consumers/odr",
          ],
        },
        {
          heading: "Urheberrecht",
          paragraphs: [
            "Die Inhalte dieser Webseite unterliegen, soweit dies rechtlich möglich ist, diversen Schutzrechten (z.B. dem Urheberrecht). Eine Verwendung/Verbreitung von bereitgestelltem Material bedarf der schriftlichen Zustimmung des Webseitenbetreibers.",
          ],
        },
        {
          heading: "Haftungsausschluss",
          paragraphs: [
            "Trotz sorgfältiger inhaltlicher Kontrolle übernimmt der Webseitenbetreiber dieser Webseite keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.",
            "Soweit auf dieser Webseite in Text, Bild oder anderen Formaten auf Inhalte Dritter zurückgegriffen wird, sind die Urheberrechte dieser Dritten zu beachten und stammen diese Inhalte – sofern dies nicht anders vermerkt ist – aus öffentlich zugänglichen Quellen. Sollten Sie der Meinung sein, dass Inhalte auf dieser Webseite Ihre Rechte verletzen, informieren Sie bitte den Webseitenbetreiber, damit entsprechende Maßnahmen eingeleitet werden können.",
          ],
        },
      ]}
    />
  );
}
