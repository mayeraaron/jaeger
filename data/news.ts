export type NewsCategory = "News" | "Aktion" | "Download";

export type NewsItem = {
  slug: string;
  title: string;
  category: NewsCategory;
  dateLabel: string;
  excerpt: string;
  content: string;
  ctaLabel: string;
  href?: string;
  pdfHref?: string;
};

export const newsItems: NewsItem[] = [
  {
    slug: "jahresaktion-home-garden",
    title: "Jahresaktion Home & Garden",
    category: "Aktion",
    dateLabel: "Aktion 2025",
    excerpt:
      "Aktuelle Jahresaktion im Bereich Home & Garden: ausgewählte Reinigungsgeräte zu attraktiven Konditionen. Jetzt Angebot einholen.",
    content:
      "Die Jahresaktion Home & Garden bietet ausgewählte Reinigungstechnik für den privaten und gewerblichen Einsatz zu Aktionspreisen. Für Details direkt bei der Jäger GmbH anfragen.",
    ctaLabel: "Anfrage senden",
    href: "/kontakt",
  },
  {
    slug: "jahresaktion-professional",
    title: "Jahresaktion Professional",
    category: "Aktion",
    dateLabel: "Aktion 2025",
    excerpt:
      "Aktuelle Jahresaktion im Professional-Bereich: leistungsstarke Reinigungstechnik für gewerbliche und industrielle Anwendungen.",
    content:
      "Die Jahresaktion Professional richtet sich an Gewerbe- und Industriekunden mit erhöhten Anforderungen an Reinigungsleistung und Langlebigkeit. Für konkrete Angebote bitte direkt anfragen.",
    ctaLabel: "Anfrage senden",
    href: "/kontakt",
  },
  {
    slug: "mietpreisliste-download",
    title: "Mietpreisliste als PDF",
    category: "Download",
    dateLabel: "Download",
    excerpt:
      "Die vorbereitete Mietpreisliste steht direkt als PDF zur Verfügung und bietet einen schnellen Einstieg in das Mietprogramm.",
    content:
      "Preis- und Übersichtsunterlagen können direkt heruntergeladen werden. Für konkrete Verfügbarkeiten und projektbezogene Konditionen empfiehlt sich die direkte Kontaktaufnahme.",
    ctaLabel: "Preisliste herunterladen",
    pdfHref: "/downloads/jaeger-mietpreisliste.pdf",
  },
];
