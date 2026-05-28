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
    slug: "mietpark-erweiterung",
    title: "Mietpark laufend erweitert",
    category: "News",
    dateLabel: "April 2026",
    excerpt:
      "Der Maschinenbestand wird laufend ausgebaut, damit für kurzfristige Einsätze und geplante Projekte rasch passende Technik bereitsteht.",
    content:
      "Mit dem Ausbau des Mietparks stärkt die Jäger GmbH ihre Verfügbarkeit für Unternehmen, Bauprojekte und kommunale Anwendungen. Ziel ist es, Maschinen schnell und planbar bereitstellen zu können.",
    ctaLabel: "Mietpark ansehen",
    href: "/mietpark",
  },
  {
    slug: "fruehjahrsaktion-reinigungstechnik",
    title: "Frühjahrsaktion Reinigungstechnik",
    category: "Aktion",
    dateLabel: "Aktion 2026",
    excerpt:
      "Ausgewählte Reinigungstechnik wird in einer vorbereiteten Aktionsunterlage übersichtlich zusammengefasst und kann direkt als PDF geöffnet werden.",
    content:
      "Für saisonale Anforderungen und kurzfristige Investitionsentscheidungen stellt die Jäger GmbH eine kompakte Aktionsübersicht für Reinigungstechnik bereit.",
    ctaLabel: "Aktion als PDF",
    pdfHref: "/downloads/jaeger-fruehjahrsaktion-reinigungstechnik.pdf",
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
