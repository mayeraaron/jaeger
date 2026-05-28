import type { Metadata } from "next";

import { ServiceDetailPage } from "@/components/services/service-detail-page";
import { requireServiceBySlug } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const service = requireServiceBySlug("baumaschinen");

export const metadata: Metadata = buildMetadata({
  title: "Baumaschinen in Klaus, Vorarlberg",
  description:
    "Baumaschinen der Jäger GmbH in Klaus, Vorarlberg für Baustellen, Infrastruktur, Materialhandling und professionelle Einsätze.",
  path: service.href,
});

export default function BaumaschinenPage() {
  return <ServiceDetailPage service={service} />;
}
