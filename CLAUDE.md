@AGENTS.md

# Design-Richtlinien – Jäger GmbH Website

## Markenfarbe / Brand Color

**Primärfarbe: `#FFDC02` (Helles Gelb)**

Diese Farbe ist die einzige Akzentfarbe der gesamten Website.
Kein Blau, Rot, Grün oder andere Akzente — ausschließlich Gelb als Highlight.

CSS-Variablen (definiert in `app/globals.css`):
- `--brand-400: #ffe44a` — Hover-Variante (heller)
- `--brand-500: #ffdc02` — Hauptfarbe
- `--brand-600: #e6c700` — Dunklere Variante

Tailwind-Klassen: `text-brand-500`, `bg-brand-500`, `border-brand-500` etc.

Wenn Farbe ins Spiel kommt → immer `#FFDC02` bzw. die `brand-*`-Klassen verwenden.
Hardcodierte `rgba()`-Werte müssen `rgba(255, 220, 2, ...)` verwenden.

## Farbschema

- Hintergründe: `#ffffff` (weiß) oder `#f8f9fa` / `bg-zinc-50` (sehr helles Grau)
- Überschriften: `text-zinc-900` (#18181b)
- Fließtext: `text-zinc-600` (#52525b)
- Sekundärtext / Labels: `text-zinc-500` (#71717a)
- Rahmen: `border-zinc-200` (#e4e4e7)
- Kein Dark Mode — durchgehend helles Design

## Stil

- Industriell aber professionell — wie eine hochwertige Baumaschinen-Firma
- Schrift: Bahnschrift / DIN (via `--font-sans` in globals.css)
- Überschriften: `font-bold` oder `font-black`, Uppercase für Hero-Elemente
- Kein unnötiger Dekor — klare, aufgeräumte Layouts
