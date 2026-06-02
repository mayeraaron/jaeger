"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { MobileNav } from "@/components/layout/mobile-nav";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { isNavigationItemActive, navigationItems } from "@/data/navigation";
import { cn } from "@/lib/cn";

function ChevronDown() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-3.5 w-3.5 opacity-50 transition-transform duration-200 group-hover/nav:rotate-180"
    >
      <path
        fillRule="evenodd"
        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

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

              if (item.children) {
                return (
                  <li key={item.label} className="group/nav relative">
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                        isActive
                          ? "bg-brand-500/10 text-brand-600 shadow-[inset_0_0_0_1px_rgba(255,220,2,0.3)]"
                          : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900",
                      )}
                    >
                      {item.label}
                      <ChevronDown />
                    </Link>

                    <div className="invisible absolute left-0 top-full z-50 pt-1 opacity-0 transition-[opacity,visibility] duration-150 group-hover/nav:visible group-hover/nav:opacity-100">
                      <div className="min-w-[13rem] rounded-2xl border border-zinc-200 bg-white p-2 shadow-[0_8px_32px_rgba(0,0,0,0.10)]">
                        <Link
                          href={item.href}
                          className={cn(
                            "block rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                            pathname === item.href
                              ? "text-brand-500"
                              : "text-zinc-400 hover:text-zinc-600",
                          )}
                        >
                          Alle Leistungen
                        </Link>
                        <div className="my-1.5 border-t border-zinc-100" />
                        {item.children.map((child) => {
                          const childActive = isNavigationItemActive(pathname, child.href);
                          return (
                            <Link
                              key={child.label}
                              href={child.href}
                              className={cn(
                                "block rounded-xl px-4 py-2.5 text-sm font-semibold transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                                childActive
                                  ? "bg-brand-500/10 text-brand-600"
                                  : "text-zinc-700 hover:text-zinc-900",
                              )}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </li>
                );
              }

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
