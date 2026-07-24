import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Seite nicht gefunden | Jäger GmbH",
};

export default function NotFound() {
  return (
    <main id="main-content" className="flex flex-1 items-center">
      <Container className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-label-text">
            404
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Seite nicht gefunden
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Die gesuchte Seite existiert nicht oder wurde verschoben.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/">Zur Startseite</Button>
            <Button href="/kontakt" variant="secondary">Kontakt aufnehmen</Button>
          </div>
          <div className="mt-16 border-t border-zinc-200 pt-10">
            <p className="text-sm text-zinc-500">
              Vielleicht finden Sie hier was Sie suchen:
            </p>
            <nav className="mt-4 flex flex-wrap justify-center gap-4">
              {[
                { label: "Leistungen", href: "/leistungen" },
                { label: "Mietpark", href: "/mietpark" },
                { label: "Über uns", href: "/ueber-uns" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-full border border-zinc-200 px-4 py-1.5 text-sm font-semibold text-zinc-600 transition hover:border-brand-500/50 hover:bg-brand-500/5 hover:text-zinc-900"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </Container>
    </main>
  );
}
