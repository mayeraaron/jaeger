import { companyDetails } from "@/data/company";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: companyDetails.name,
    description: companyDetails.tagline,
    url: "https://www.jaeger.at",
    telephone: companyDetails.phone,
    email: companyDetails.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Treietstraße 2a",
      addressLocality: "Klaus",
      postalCode: "6833",
      addressCountry: "AT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.3094,
      longitude: 9.6358,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "12:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "13:30",
        closes: "17:00",
      },
    ],
    sameAs: ["https://www.jaeger.at"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
