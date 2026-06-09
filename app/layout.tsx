import type { Metadata } from "next";

import { CookieBanner } from "@/components/layout/cookie-banner";
import { PartnerBrands } from "@/components/layout/partner-brands";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { LocalBusinessSchema } from "@/components/seo/local-business-schema";
import { rootMetadata } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-AT" className="h-full scroll-smooth">
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="min-h-full bg-white text-zinc-900 antialiased">
        <div className="relative flex min-h-screen flex-col overflow-x-clip">
          <a href="#main-content" className="skip-link">
            Zum Inhalt springen
          </a>
          <SiteHeader />
          {children}
          <PartnerBrands />
          <SiteFooter />
          <CookieBanner />
        </div>
      </body>
    </html>
  );
}
