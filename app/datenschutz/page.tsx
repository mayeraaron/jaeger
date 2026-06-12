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
            "Treten Sie per Formular auf unserer Website oder per E-Mail mit uns in Kontakt, werden Ihre angegebenen Daten (Name, E-Mail-Adresse, Telefonnummer, Nachricht) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung an Dritte weiter.",
            "Die Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).",
            "Für den technischen Versand der Kontaktformular-Nachrichten nutzen wir den Dienst Resend (Resend Inc., 2261 Market Street #5039, San Francisco, CA 94114, USA). Resend ist als Auftragsverarbeiter im Sinne von Art. 28 DSGVO tätig. Die Daten werden ausschließlich zur Übermittlung der Nachricht an uns verwendet und danach nicht weiterverarbeitet.",
            "Die von Ihnen eingegebenen Daten verbleiben bei uns, bis der Zweck für die Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Aufbewahrungsfristen bleiben unberührt.",
          ],
        },
        {
          heading: "Hosting",
          paragraphs: [
            "Diese Website wird bei Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA gehostet. Vercel ist als Auftragsverarbeiter im Sinne von Art. 28 DSGVO tätig. Bei jedem Aufruf unserer Website werden automatisch Server-Logfiles (u.a. IP-Adresse, Zeitstempel, aufgerufene Seite) auf den Servern von Vercel verarbeitet.",
            "Vercel verarbeitet Daten ausschließlich zur Bereitstellung des Hostings und zur Sicherstellung des Betriebs. Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren und zuverlässigen Betrieb der Website).",
          ],
        },
        {
          heading: "Google Maps",
          paragraphs: [
            "Auf unserer Kontaktseite verwenden wir den Kartendienst Google Maps der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Durch die Einbindung von Google Maps kann Google Daten über Ihren Websitebesuch erheben, insbesondere Ihre IP-Adresse sowie Informationen über Ihren Browser.",
            "Die Nutzung von Google Maps erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der anschaulichen Darstellung unseres Standorts). Wenn Sie die Google Maps-Karte auf unserer Seite aufrufen, stimmen Sie der Verarbeitung durch Google gemäß den Google-Datenschutzbestimmungen zu.",
            "Weitere Informationen zur Datenverarbeitung durch Google finden Sie unter: policies.google.com/privacy",
          ],
        },
        {
          heading: "Lokaler Browserspeicher (localStorage)",
          paragraphs: [
            "Diese Website verwendet keine Tracking- oder Analyse-Cookies. Zur Speicherung Ihrer Bestätigung des Datenschutzhinweises wird ausschließlich der lokale Browserspeicher (localStorage) Ihres Endgeräts genutzt. Dabei wird ein einzelner Eintrag ohne personenbezogene Daten gesetzt, der lediglich festhält, dass Sie den Hinweis zur Kenntnis genommen haben.",
            "Dieser Eintrag dient nicht der Wiedererkennung Ihres Browsers oder der Erstellung von Nutzungsprofilen. Sie können ihn jederzeit über die Einstellungen Ihres Browsers löschen, ohne dass die Funktionalität der Website beeinträchtigt wird.",
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
          heading: "Recht auf Widerspruch",
          paragraphs: [
            "Soweit wir die Verarbeitung Ihrer personenbezogenen Daten auf berechtigte Interessen stützen (Art. 6 Abs. 1 lit. f DSGVO), haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung einzulegen, sofern dafür Gründe vorliegen, die sich aus Ihrer besonderen Situation ergeben.",
            "Um Ihr Widerspruchsrecht auszuüben, wenden Sie sich bitte per E-Mail an office@jaeger.at.",
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
            "Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Juni 2026.",
            "Durch die Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf der Website von Ihnen abgerufen und ausgedruckt werden.",
          ],
        },
      ]}
    />
  );
}
