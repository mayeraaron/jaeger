import type { Metadata } from "next";

const siteName = "Jäger GmbH";
const siteUrl = "https://www.jaeger.at";
const defaultDescription =
  "Jäger GmbH in Klaus, Vorarlberg: Reinigungstechnik, Strahltechnik, Baumaschinen, Mietpark und persönliche Beratung für Unternehmen, Bau und Gewerbe.";

type BuildMetadataParams = {
  title: string;
  description?: string;
  path?: string;
  type?: "website" | "article";
};

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Reinigungstechnik, Strahltechnik, Baumaschinen & Mietpark in Klaus`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName,
    title: `${siteName} | Reinigungstechnik, Strahltechnik, Baumaschinen & Mietpark in Klaus`,
    description: defaultDescription,
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

export function buildMetadata({
  title,
  description = defaultDescription,
  path = "/",
  type = "website",
}: BuildMetadataParams): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type,
      locale: "de_AT",
      siteName,
      title: `${title} | ${siteName}`,
      description,
      url: path,
    },
  };
}
