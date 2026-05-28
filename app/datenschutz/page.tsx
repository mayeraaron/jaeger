import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Datenschutz",
  description:
    "Datenschutzhinweise der Jäger GmbH für Website, Kontaktaufnahme und Datenverarbeitung mit Bezug zu Klaus, Vorarlberg.",
  path: "/datenschutz",
});

export default function DatenschutzPage() {
  return (
    <LegalPage
      eyebrow="Rechtliches"
      title="Datenschutz"
      description="Datenschutzhinweise in einer ruhigen, gut lesbaren Seitenstruktur mit klaren Überschriften und ausreichend Abstand für längere Rechtstexte."
      sections={[
        {
          heading: "Allgemeine Hinweise",
          paragraphs: [
            "Der Schutz personenbezogener Daten ist für die Jäger GmbH ein wichtiges Anliegen. Diese Seite bildet die strukturelle Grundlage für eine vollständige Datenschutzerklärung und kann mit den finalen, rechtlich abgestimmten Texten ergänzt werden.",
            "Verarbeitet werden personenbezogene Daten nur in dem Umfang, der für den Betrieb der Website, die Bearbeitung von Anfragen und die technische Bereitstellung der Inhalte erforderlich ist.",
          ],
        },
        {
          heading: "Kontaktaufnahme",
          paragraphs: [
            "Wenn Besucher per E-Mail oder über ein Kontaktformular mit dem Unternehmen in Verbindung treten, werden die übermittelten Angaben zur Bearbeitung der Anfrage und für mögliche Rückfragen verwendet.",
            "In der finalen Datenschutzerklärung sollten hier die konkrete Rechtsgrundlage, Speicherdauer und die zuständige Stelle für die Datenverarbeitung ergänzt werden.",
          ],
        },
        {
          heading: "Server- und Zugriffsdaten",
          paragraphs: [
            "Beim Aufruf der Website können technisch notwendige Daten verarbeitet werden, um die Seite stabil, sicher und nachvollziehbar auszuliefern. Dazu zählen typischerweise Zugriffsdaten, Browserinformationen oder Zeitpunkte von Aufrufen.",
            "Für die rechtsverbindliche Fassung sollte dieser Abschnitt um konkrete Angaben zur Hosting-Umgebung, zu Logfiles sowie zu Aufbewahrungsfristen ergänzt werden.",
          ],
        },
        {
          heading: "Rechte betroffener Personen",
          paragraphs: [
            "Betroffene Personen haben nach Maßgabe der geltenden Datenschutzbestimmungen unter anderem das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Widerspruch.",
            "Ebenso kann ein Beschwerderecht bei der zuständigen Datenschutzbehörde bestehen. Die genaue Ausgestaltung dieser Rechte sollte in der finalen Fassung rechtlich präzise ausformuliert werden.",
          ],
        },
        {
          heading: "Hinweis zur Finalisierung",
          paragraphs: [
            "Die vorliegende Seite ist bewusst als gut lesbare inhaltliche Struktur angelegt, damit die spätere Einpflege einer vollständigen Datenschutzerklärung ohne gestalterische Nacharbeit erfolgen kann.",
            "Vor Veröffentlichung sollten alle datenschutzrechtlich relevanten Prozesse, Tools und Kontaktwege vollständig geprüft und inhaltlich ergänzt werden.",
          ],
        },
      ]}
    />
  );
}
