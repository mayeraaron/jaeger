"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "jaeger_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      // localStorage not available
    }
  }, []);

  function dismiss() {
    try { localStorage.setItem(STORAGE_KEY, "acknowledged"); } catch {}
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-Hinweis"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-[200] border-t border-zinc-200 bg-white px-4 py-5 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] sm:px-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-zinc-600">
          Diese Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb der Seite erforderlich sind. Es werden keine Tracking- oder Analyse-Cookies eingesetzt.{" "}
          <Link href="/datenschutz" className="font-semibold text-zinc-900 underline underline-offset-2 hover:text-brand-600">
            Datenschutzerklärung
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={dismiss}
            className="rounded-full bg-brand-500 px-5 py-2 text-xs font-bold uppercase tracking-[0.14em] text-zinc-900 transition hover:bg-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
          >
            Verstanden
          </button>
        </div>
      </div>
    </div>
  );
}
