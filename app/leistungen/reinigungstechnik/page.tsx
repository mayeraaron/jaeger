import type { Metadata } from "next";

import { ServiceDetailPage } from "@/components/services/service-detail-page";
import { requireServiceBySlug } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const service = requireServiceBySlug("reinigungstechnik");

export const metadata: Metadata = buildMetadata({
  title: "Reinigungstechnik in Klaus, Vorarlberg",
  description:
    "Professionelle Reinigungstechnik der Jäger GmbH in Klaus, Vorarlberg für Betriebe, Gewerbe, Werkstätten und kommunale Anwendungen.",
  path: service.href,
});

export default function ReinigungstechnikPage() {
  return <ServiceDetailPage service={service} />;
}
