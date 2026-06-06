import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Datenschutz",
  description:
    "Datenschutzerklärung der Jäger GmbH gemäß DSGVO für Website, Kontaktaufnahme und Datenverarbeitung.",
  path: "/datenschutz",
});

export default function DatenschutzPage() {
  return (
    <LegalPage
      eyebrow="Rechtliches"
      title="Datenschutzerklärung"
      description="Informationen zur Verarbeitung personenbezogener Daten gemäß der Datenschutz-Grundverordnung (DSGVO) und dem österreichischen Datenschutzgesetz (DSG)."
      sections={[
        {
          heading: "Verantwortlicher",
          paragraphs: [
            "Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:",
            "Jäger GmbH · Treietstraße 2a · 6833 Klaus · Österreich",
            "Telefon: 05523 62726-0 · E-Mail: office@jaeger.at",
          ],
        },
        {
          heading: "Allgemeines zur Datenverarbeitung",
          paragraphs: [
            "Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, DSG).",
            "In dieser Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.",
          ],
        },
        {
          heading: "Datenverarbeitung beim Besuch unserer Website",
          paragraphs: [
            "Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sogenannten Logfile gespeichert.",
            "Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:",
          ],
          list: [
            "IP-Adresse des anfragenden Rechners",
            "Datum und Uhrzeit des Zugriffs",
            "Name und URL der abgerufenen Datei",
            "Website, von der aus der Zugriff erfolgt (Referrer-URL)",
            "Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners",
            "Name Ihres Access-Providers",
          ],
        },
        {
          heading: "Zweck und Rechtsgrundlage der Verarbeitung",
          paragraphs: [
            "Die genannten Daten werden zu folgenden Zwecken verarbeitet: Gewährleistung eines reibungslosen Verbindungsaufbaus der Website, Gewährleistung einer komfortablen Nutzung unserer Website, Auswertung der Systemsicherheit und -stabilität sowie zu weiteren administrativen Zwecken.",
            "Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse folgt aus den oben aufgelisteten Zwecken zur Datenerhebung.",
          ],
        },
        {
          heading: "Kontaktaufnahme",
          paragraphs: [
            "Treten Sie per Formular auf unserer Website oder per E-Mail mit uns in Kontakt, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.",
            "Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen.",
            "Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.",
          ],
        },
        {
          heading: "Cookies",
          paragraphs: [
            "Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Cookies richten keinen Schaden an.",
            "Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu gestalten. Einige Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Sie ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.",
            "Wenn Sie dies nicht wünschen, können Sie Ihren Browser so einrichten, dass er Sie über das Setzen von Cookies informiert und Sie dies nur im Einzelfall erlauben. Bei der Deaktivierung von Cookies kann die Funktionalität unserer Website eingeschränkt sein.",
          ],
        },
        {
          heading: "SSL-Verschlüsselung",
          paragraphs: [
            'Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.',
            "Wenn die SSL-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.",
          ],
        },
        {
          heading: "Ihre Rechte",
          paragraphs: [
            "Ihnen stehen bezüglich Ihrer bei uns gespeicherten Daten grundsätzlich folgende Rechte zu:",
          ],
          list: [
            "Recht auf Auskunft (Art. 15 DSGVO)",
            "Recht auf Berichtigung (Art. 16 DSGVO)",
            "Recht auf Löschung (Art. 17 DSGVO)",
            "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
            "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
            "Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)",
            "Recht auf Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)",
          ],
        },
        {
          heading: "Recht auf Widerruf",
          paragraphs: [
            "Sie haben das Recht, Ihre datenschutzrechtliche Einwilligungserklärung jederzeit zu widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.",
          ],
        },
        {
          heading: "Beschwerderecht bei der Aufsichtsbehörde",
          paragraphs: [
            "Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist die österreichische Datenschutzbehörde:",
            "Österreichische Datenschutzbehörde · Barichgasse 40-42 · 1030 Wien · dsb@dsb.gv.at · www.dsb.gv.at",
          ],
        },
        {
          heading: "Aktualität und Änderung dieser Datenschutzerklärung",
          paragraphs: [
            "Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Juni 2025.",
            "Durch die Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf der Website von Ihnen abgerufen und ausgedruckt werden.",
          ],
        },
      ]}
    />
  );
}
