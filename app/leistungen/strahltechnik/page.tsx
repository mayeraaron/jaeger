import type { Metadata } from "next";

import { ServiceDetailPage } from "@/components/services/service-detail-page";
import { requireServiceBySlug } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const service = requireServiceBySlug("strahltechnik");

export const metadata: Metadata = buildMetadata({
  title: "Strahltechnik in Klaus, Vorarlberg",
  description:
    "Strahltechnik der Jäger GmbH in Klaus, Vorarlberg für Oberflächenbearbeitung, Reinigung, Sanierung und professionelle Projektanforderungen.",
  path: service.href,
});

export default function StrahltechnikPage() {
  return <ServiceDetailPage service={service} />;
}
