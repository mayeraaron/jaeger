import Link from "next/link";

import { Card } from "@/components/ui/card";
import { companyDetails } from "@/data/company";
import { cn } from "@/lib/cn";

type ContactDetailsProps = {
  className?: string;
  cardClassName?: string;
};

export function ContactDetails({ className, cardClassName }: ContactDetailsProps) {
  return (
    <address className={cn("not-italic", className)}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Card className={cn("p-5", cardClassName)}>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
            Telefon
          </p>
          <Link
            href={companyDetails.phoneHref}
            className="mt-3 inline-flex text-lg font-semibold text-zinc-900 transition hover:text-brand-500"
          >
            {companyDetails.phone}
          </Link>
        </Card>
        <Card className={cn("p-5", cardClassName)}>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
            E-Mail
          </p>
          <Link
            href={companyDetails.emailHref}
            className="mt-3 inline-flex break-all text-lg font-semibold text-zinc-900 transition hover:text-brand-500"
          >
            {companyDetails.email}
          </Link>
        </Card>
        <Card className={cn("p-5", cardClassName)}>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
            Adresse
          </p>
          <div className="mt-3 space-y-1 text-sm text-zinc-600">
            {companyDetails.address.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </Card>
        <Card className={cn("p-5", cardClassName)}>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
            Öffnungszeiten
          </p>
          <div className="mt-3 space-y-1 text-sm text-zinc-600">
            {companyDetails.hours.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </Card>
      </div>
    </address>
  );
}
