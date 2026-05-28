import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { companyDetails } from "@/data/company";
import { legalNavigationItems } from "@/data/navigation";

const serviceLinks = [
  { label: "Reinigungstechnik", href: "/leistungen/reinigungstechnik" },
  { label: "Strahltechnik", href: "/leistungen/strahltechnik" },
  { label: "Baumaschinen", href: "/leistungen/baumaschinen" },
  { label: "Kärcher Service", href: "/leistungen/reinigungstechnik" },
  { label: "Mietpark", href: "/mietpark" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Mietpark", href: "/mietpark" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Aktuelles", href: "/aktuelles" },
];

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-zinc-200 bg-zinc-50">
      <Container className="py-14 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr]">
          <div className="space-y-5 sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="max-w-xs text-sm leading-7 text-zinc-500">
              {companyDetails.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-zinc-900">
              Leistungen
            </h3>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 transition hover:text-zinc-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-zinc-900">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 transition hover:text-zinc-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-zinc-900">
              Kontakt
            </h3>
            <div className="mt-5 space-y-3 text-sm text-zinc-500">
              <address className="not-italic space-y-1">
                {companyDetails.address.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </address>
              <Link href={companyDetails.phoneHref} className="block transition hover:text-zinc-900">
                {companyDetails.phone}
              </Link>
              <Link
                href={companyDetails.emailHref}
                className="block break-all transition hover:text-zinc-900"
              >
                {companyDetails.email}
              </Link>
              <div className="mt-4 space-y-1 text-xs text-zinc-400">
                {companyDetails.hours.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-zinc-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-400">
            © 2025 {companyDetails.name}. Alle Rechte vorbehalten.
          </p>
          <nav aria-label="Rechtliche Navigation" className="flex flex-wrap gap-5">
            {legalNavigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-zinc-400 transition hover:text-zinc-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
