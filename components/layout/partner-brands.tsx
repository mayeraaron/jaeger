import Image from "next/image";

import { Container } from "@/components/ui/container";

const partners = [
  { name: "Kärcher", src: "Kaercher-300x95.webp", width: 300, height: 95 },
  { name: "Kaeser Kompressoren", src: "kaeser-300x95.webp", width: 300, height: 95 },
  { name: "Cleanfix", src: "cleanfix-300x95.webp", width: 300, height: 95 },
  { name: "Ghibli & Wirbel", src: "ghibli-300x95.webp", width: 300, height: 95 },
  { name: "Glaap", src: "glaap-1-300x95.webp", width: 300, height: 95 },
  { name: "HiKoki", src: "hikoki-300x95.webp", width: 300, height: 95 },
  { name: "Metabo", src: "metabo-300x95.webp", width: 300, height: 95 },
  { name: "Menikini", src: "meninkini-300x95.webp", width: 300, height: 95 },
  { name: "Hammer", src: "liquidhammer-300x95.webp", width: 300, height: 95 },
  { name: "Spongejet", src: "spongejet-300x95.webp", width: 300, height: 95 },
  { name: "Scanmaskin", src: "scanmaskin-1-300x95.webp", width: 300, height: 95 },
  { name: "Putzmeister", src: "putzmeister-300x95.webp", width: 300, height: 95 },
];

export function PartnerBrands() {
  return (
    <section className="border-y border-zinc-200 bg-[#f8f9fa] py-[60px]">
      <Container>
        <h2 className="mb-10 text-center text-2xl font-bold tracking-tight text-zinc-900">
          Unsere Partnermarken
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex min-h-[72px] items-center justify-center rounded-xl border border-zinc-200 bg-white px-5 py-4 transition duration-300 hover:border-brand-500/40 hover:shadow-[0_2px_12px_rgba(0,0,0,0.07)]"
            >
              <Image
                src={`/logos/${partner.src}`}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className="h-9 w-auto grayscale opacity-55 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100 sm:h-10"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
