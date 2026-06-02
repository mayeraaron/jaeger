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
      "Wir bieten eine breite Palette an hochwertigen Reinigungsgeräten und Zubehör für verschiedenste Anwendungen und Branchen – sowohl zum Kauf als auch zur Miete. Unser Fokus liegt auf individuellem Service und Beratung, um Ihre Projekte effizient zu unterstützen.",
    overviewText:
      "Instandhaltung, Servicieren und Reparieren von Reinigungsgeräten – mit umfangreichem Sortiment von etablierten Herstellern wie Kärcher für Zuverlässigkeit und Effizienz.",
    description: [
      "Von hochwertigen Hochdruckreinigern über Industriestaubsauger bis hin zu Bodenreinigungsmaschinen und Dampfreinigern bietet die Jäger GmbH ein umfangreiches Sortiment etablierter Hersteller für professionelle Anwendungen in Industrie, Gewerbe, Werkstatt und kommunalem Umfeld.",
      "Neben dem Verkauf steht auch eine flexible Vermietung zur Verfügung – mit regelmäßig gewarteter Ausrüstung sowie Beratungs- und Schulungsleistungen für einen sicheren und wirtschaftlichen Einsatz.",
    ],
    benefits: [
      "Hochdruckreiniger für Außenbereiche, Fahrzeuge und Maschinen",
      "Industriestaubsauger zur Schmutz- und Flüssigkeitsentfernung",
      "Bodenreinigungsmaschinen für großflächige Bereiche",
      "Dampfreiniger als chemiefreie Reinigungslösung",
      "Zubehör und Ersatzteile: Bürsten, Düsen, Filter und Schläuche",
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
    heroTitle: "Strahltechnik – Effektive Oberflächenbehandlung für jede Anwendung.",
    heroText:
      "Wir bieten präzise und effektive Methoden zur Oberflächenbehandlung für diverse Materialien. Die Leistungen umfassen Reinigung, Entgratung, Oberflächenvorbereitung und Veredelung – mit der jeweils passenden Technik für das jeweilige Material.",
    overviewText:
      "Präzise Oberflächenbehandlung mit Eis-, Glasperlen-, Sponge- und Granatsandstrahlen für Sanierung, Instandhaltung und Vorbereitung.",
    description: [
      "Eisstrahlen mit Trockeneis (CO₂) ist eine umweltfreundliche Methode zur Reinigung von Oberflächen: rückstandsfrei, schonend zu empfindlichen Materialien und wirksam gegen organische wie anorganische Verunreinigungen. Glasperlenstrahlen verleiht ein gleichmäßiges, mattes Finish und stärkt die Materialoberfläche – besonders für Metallveredelung geeignet.",
      "Sponge-Strahlen mit schwammähnlichen Partikeln kombiniert Präzision mit minimaler Staubentwicklung – ideal für geschlossene Räume. Granatsandstrahlen nutzt Granatsand als leistungsstarkes, recyclebares Strahlmittel für kraftvolle Entrostung und Beschichtungsentfernung.",
    ],
    benefits: [
      "Eisstrahlen: rückstandsfrei, schonend, wirksam gegen organische und anorganische Verunreinigungen",
      "Glasperlenstrahlen: gleichmäßiges mattes Finish, ideal für Metallveredelung",
      "Sponge-Strahlen: minimale Staubentwicklung, präzise – ideal für geschlossene Räume",
      "Granatsandstrahlen: leistungsstarke Entrostung, umweltfreundlich und recyclebar",
    ],
    useCases: [
      "Entfernung von Beschichtungen, Rost und Ablagerungen",
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
      "Wir bieten eine umfassende Auswahl an Baumaschinen von führenden Herstellern, die sich durch Zuverlässigkeit, Langlebigkeit und hohe Leistung auszeichnen – sowohl zum Kauf als auch zur Miete.",
    overviewText:
      "Moderne Baumaschinen und Zubehör für Baustelle und Infrastruktur – mit fachkundiger Beratung und flexiblen Mietoptionen für zeitkritische Projekte.",
    description: [
      "Das Sortiment umfasst Estrichpumpen, Kompressoren, Bagger, Stromaggregate und Betonschleifmaschinen von führenden Herstellern für professionelle Einsätze im Bau- und Infrastrukturbereich.",
      "Neben dem Kauf steht auch ein flexibler Mietservice zur Verfügung – mit modernen, regelmäßig gewarteten Maschinen und fachkundiger Beratung für die Auswahl der richtigen Technik für Ihr Projekt.",
    ],
    benefits: [
      "Estrichpumpen für Boden- und Deckenestrich",
      "Kompressoren für Baustellen und gewerbliche Anwendungen",
      "Bagger für Erd- und Abbrucharbeiten",
      "Stromaggregate für netzunabhängige Stromversorgung",
      "Betonschleifmaschinen für Oberflächen und Beschichtungen",
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
