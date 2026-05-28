export type ServiceSlug = "reinigungstechnik" | "strahltechnik" | "baumaschinen";

export type ServiceDetail = {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  href: `/leistungen/${ServiceSlug}`;
  eyebrow: string;
  heroTitle: string;
  heroText: string;
  overviewText: string;
  description: string[];
  benefits: string[];
  useCases: string[];
  imageLabel: string;
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "reinigungstechnik",
    title: "Reinigungstechnik",
    shortTitle: "Reinigung",
    href: "/leistungen/reinigungstechnik",
    eyebrow: "Leistungsbereich",
    heroTitle: "Reinigungstechnik für saubere Prozesse, Flächen und Betriebsabläufe.",
    heroText:
      "Die Jäger GmbH bietet Reinigungstechnik für professionelle Anwendungen in Industrie, Gewerbe, Werkstatt und kommunalem Umfeld. Im Fokus stehen leistungsstarke Geräte, wirtschaftliche Lösungen und eine Beratung, die sich an realen Anforderungen orientiert.",
    overviewText:
      "Leistungsstarke Reinigungslösungen für Innen- und Außenbereiche, abgestimmt auf professionelle Anforderungen im täglichen Einsatz.",
    description: [
      "Reinigungstechnik muss im Alltag zuverlässig funktionieren, wirtschaftlich einsetzbar sein und unterschiedliche Flächen sowie Verschmutzungsgrade sicher bewältigen. Genau hier setzt das Leistungsangebot der Jäger GmbH an.",
      "Von der Beratung bis zur passenden Gerätelösung unterstützt das Unternehmen Betriebe und öffentliche Auftraggeber dabei, Reinigungsaufgaben effizient, nachvollziehbar und mit praxistauglicher Technik umzusetzen.",
    ],
    benefits: [
      "Zuverlässige Technik für den regelmäßigen und intensiven Einsatz",
      "Passende Lösungen für Innenflächen, Außenbereiche und Betriebsumgebungen",
      "Beratung mit Blick auf Wirtschaftlichkeit, Handling und Einsatzdauer",
    ],
    useCases: [
      "Reinigung von Produktions-, Lager- und Werkstattflächen",
      "Pflege von Außenanlagen, Höfen und Verkehrsflächen",
      "Unterhalts- und Intensivreinigung in Gewerbe und kommunalen Bereichen",
    ],
    imageLabel: "Bildblock Reinigungstechnik",
  },
  {
    slug: "strahltechnik",
    title: "Strahltechnik",
    shortTitle: "Strahltechnik",
    href: "/leistungen/strahltechnik",
    eyebrow: "Leistungsbereich",
    heroTitle: "Strahltechnik für Oberflächenbearbeitung, Sanierung und präzise Reinigung.",
    heroText:
      "Mit moderner Strahltechnik unterstützt die Jäger GmbH Anwendungen, bei denen Oberflächen gezielt bearbeitet, gereinigt oder für weitere Arbeitsschritte vorbereitet werden müssen. Entscheidend sind dabei Kontrolle, Präzision und die passende Technik für das jeweilige Material.",
    overviewText:
      "Technik für präzise Oberflächenbearbeitung und anspruchsvolle Reinigungsaufgaben in Sanierung, Instandhaltung und Vorbereitung.",
    description: [
      "Strahltechnik kommt überall dort zum Einsatz, wo konventionelle Reinigungsverfahren an ihre Grenzen stoßen oder Oberflächen gezielt vorbereitet werden müssen. Dazu gehören Sanierung, Entschichtung, Reinigung und materialschonende Bearbeitung.",
      "Die Jäger GmbH unterstützt bei der Auswahl geeigneter Technik für unterschiedliche Anforderungen und schafft so die Grundlage für saubere, kontrollierte und reproduzierbare Ergebnisse.",
    ],
    benefits: [
      "Hohe Präzision bei Reinigung und Oberflächenvorbereitung",
      "Geeignete Technik für unterschiedliche Materialien und Einsatzbedingungen",
      "Beratung für effiziente und fachgerechte Bearbeitungsprozesse",
    ],
    useCases: [
      "Entfernung von Beschichtungen, Rückständen und Ablagerungen",
      "Vorbereitung von Oberflächen für weitere Bearbeitungsschritte",
      "Sanierungs- und Instandhaltungsarbeiten im gewerblichen Umfeld",
    ],
    imageLabel: "Bildblock Strahltechnik",
  },
  {
    slug: "baumaschinen",
    title: "Baumaschinen",
    shortTitle: "Baumaschinen",
    href: "/leistungen/baumaschinen",
    eyebrow: "Leistungsbereich",
    heroTitle: "Baumaschinen für Baustelle, Infrastruktur und professionelle Ausführung.",
    heroText:
      "Die Jäger GmbH bietet Baumaschinen für unterschiedliche Einsatzbereiche im Bau- und Infrastruktursektor. Im Mittelpunkt stehen robuste Technik, praxistaugliche Lösungen und eine Auswahl, die sich am konkreten Bedarf orientiert.",
    overviewText:
      "Robuste Maschinenlösungen für Bau, Abbruch, Materialhandling und infrastrukturelle Aufgaben mit professionellem Anspruch.",
    description: [
      "Baumaschinen müssen auf der Baustelle funktionieren, verfügbar sein und zu den tatsächlichen Anforderungen des Projekts passen. Deshalb setzt die Jäger GmbH auf Lösungen, die im professionellen Einsatz überzeugen.",
      "Unternehmen erhalten Unterstützung bei der Auswahl geeigneter Maschinen für typische Bauaufgaben, für infrastrukturelle Arbeiten und für Projekte, bei denen Zuverlässigkeit und kurze Wege entscheidend sind.",
    ],
    benefits: [
      "Praxisgerechte Maschinen für unterschiedliche Einsatzszenarien",
      "Fokus auf Verfügbarkeit, Belastbarkeit und wirtschaftlichen Einsatz",
      "Direkte Beratung für projektgerechte Auswahl und Planung",
    ],
    useCases: [
      "Maschineneinsatz auf Baustellen und in Infrastrukturprojekten",
      "Unterstützung bei Materialbewegung, Abbruch und Verdichtung",
      "Ergänzende Technik für kurzfristige oder planbare Bauvorhaben",
    ],
    imageLabel: "Bildblock Baumaschinen",
  },
];

export const serviceCards = serviceDetails.map((service) => ({
  title: service.title,
  text: service.overviewText,
  href: service.href,
}));

export function getServiceBySlug(slug: ServiceSlug) {
  return serviceDetails.find((service) => service.slug === slug);
}

export function requireServiceBySlug(slug: ServiceSlug) {
  const service = getServiceBySlug(slug);

  if (!service) {
    throw new Error(`Service '${slug}' not found.`);
  }

  return service;
}
