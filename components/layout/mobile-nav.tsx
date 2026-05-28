"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { isNavigationItemActive, type NavItem } from "@/data/navigation";
import { cn } from "@/lib/cn";

type MobileNavProps = {
  items: NavItem[];
};

export function MobileNav({ items }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
        onClick={() => setIsOpen((open) => !open)}
        className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-zinc-700 shadow-sm transition hover:bg-zinc-50 hover:border-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
      >
        {isOpen ? "Schließen" : "Menü"}
      </button>

      <div
        id="mobile-navigation"
        className={cn(
          "absolute right-0 top-full z-50 w-[min(20rem,calc(100vw-2rem))] overflow-hidden transition-[opacity,transform,visibility] duration-200",
          isOpen
            ? "visible translate-y-3 opacity-100"
            : "invisible pointer-events-none translate-y-1 opacity-0",
        )}
      >
        <div className="rounded-3xl border border-zinc-200 bg-white p-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
          <nav aria-label="Mobile Navigation">
            <ul className="flex flex-col gap-1">
              {items.map((item) => {
                const isActive = isNavigationItemActive(pathname, item.href);
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block rounded-2xl px-4 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                        isActive
                          ? "bg-brand-500/10 text-brand-600 shadow-[inset_0_0_0_1px_rgba(255,220,2,0.25)]"
                          : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
