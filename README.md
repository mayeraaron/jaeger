# Jäger GmbH – Website

Firmenwebsite der Jäger GmbH, Kärcher-Fachbetrieb. Gebaut mit [Next.js](https://nextjs.org) (App Router) und TypeScript.

## Setup

Abhängigkeiten installieren:

```bash
npm install
```

Danach eine `.env.local` im Projekt-Root anlegen mit folgenden Variablen (siehe `.env.example`):

- `RESEND_API_KEY`
- `CONTACT_RECIPIENT_EMAIL`
- `CONTACT_FROM_EMAIL`

Diese werden für den Versand des Kontaktformulars über [Resend](https://resend.com) benötigt.

Entwicklungsserver starten:

```bash
npm run dev
```

Die Seite ist danach unter [http://localhost:3000](http://localhost:3000) erreichbar.

## Projektstruktur

- `app/` – Next.js App-Router-Routen (Seiten wie `leistungen/`, `mietpark/`, `kontakt/`, `ueber-uns/`, Rechtstexte sowie die `api/contact`-Route)
- `components/` – UI-Komponenten, gruppiert nach Bereich (`ui/`, `layout/`, `company/`, `contact/`, `services/`, `legal/`, `seo/`)
- `lib/` – Utilities und Services (z. B. `contact-service.ts` für den Mailversand, `seo.ts` für Metadaten)
- `data/` – statische Inhalte der Seite (Leistungen, Mietpark, News, Firmendaten, Navigation) als typisierte TS-Module

## Deployment

Deployment erfolgt über [Vercel](https://vercel.com), verbunden mit dem GitHub-Repository. Jeder Push auf `main` löst automatisch ein neues Deployment aus.
