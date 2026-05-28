import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center rounded-lg transition hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
        className,
      )}
      aria-label="Jäger GmbH Startseite"
    >
      <Image
        src="/logos/logotest.webp"
        alt="JÄGER GmbH"
        width={500}
        height={200}
        className="h-12 w-auto object-contain"
        priority
      />
    </Link>
  );
}
