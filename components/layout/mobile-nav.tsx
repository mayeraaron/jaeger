"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { isNavigationItemActive, type NavItem } from "@/data/navigation";
import { cn } from "@/lib/cn";

type MobileNavProps = {
  items: NavItem[];
};

function ChevronDown({ rotated }: { rotated: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={cn("h-4 w-4 transition-transform duration-200", rotated && "rotate-180")}
    >
      <path
        fillRule="evenodd"
        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function MobileNav({ items }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
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

      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        id="mobile-navigation"
        className={cn(
          "absolute right-0 top-full z-50 w-[min(20rem,calc(100vw-2rem))] transition-[opacity,transform,visibility] duration-200",
          isOpen
            ? "visible translate-y-3 opacity-100"
            : "invisible pointer-events-none translate-y-1 opacity-0",
        )}
      >
        <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white p-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
          <nav aria-label="Mobile Navigation">
            <ul className="flex flex-col gap-1">
              {items.map((item) => {
                const isActive = isNavigationItemActive(pathname, item.href);
                const isExpanded = expandedItem === item.label;

                if (item.children) {
                  return (
                    <li key={item.label}>
                      <div className="flex items-center gap-1">
                        <Link
                          href={item.href}
                          aria-current={isActive ? "page" : undefined}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "flex-1 rounded-2xl px-4 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                            isActive
                              ? "bg-brand-500/10 text-brand-600 shadow-[inset_0_0_0_1px_rgba(255,220,2,0.25)]"
                              : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900",
                          )}
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          aria-expanded={isExpanded}
                          aria-label={isExpanded ? "Untermenü schließen" : "Untermenü öffnen"}
                          onClick={() => setExpandedItem(isExpanded ? null : item.label)}
                          className="rounded-2xl border border-zinc-200 bg-zinc-50 p-3 text-zinc-500 transition hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                        >
                          <ChevronDown rotated={isExpanded} />
                        </button>
                      </div>

                      {isExpanded && (
                        <ul className="mt-1 space-y-1 pl-3">
                          {item.children.map((child) => {
                            const childActive = isNavigationItemActive(pathname, child.href);
                            return (
                              <li key={child.label}>
                                <Link
                                  href={child.href}
                                  aria-current={childActive ? "page" : undefined}
                                  onClick={() => setIsOpen(false)}
                                  className={cn(
                                    "block rounded-2xl px-4 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                                    childActive
                                      ? "bg-brand-500/10 text-brand-600 shadow-[inset_0_0_0_1px_rgba(255,220,2,0.25)]"
                                      : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900",
                                  )}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                }

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
