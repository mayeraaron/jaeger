"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { MobileNav } from "@/components/layout/mobile-nav";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { isNavigationItemActive, navigationItems } from "@/data/navigation";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white shadow-sm">
      <Container className="flex min-h-[4.5rem] items-center justify-between gap-6 text-zinc-900">
        <Logo />

        <nav aria-label="Hauptnavigation" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {navigationItems.map((item) => {
              const isActive = isNavigationItemActive(pathname, item.href);
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "rounded-full px-3.5 py-2 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                      isActive
                        ? "bg-brand-500/10 text-brand-600 shadow-[inset_0_0_0_1px_rgba(255,220,2,0.3)]"
                        : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <MobileNav items={navigationItems} />
      </Container>
    </header>
  );
}
