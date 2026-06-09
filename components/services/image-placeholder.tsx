type ImagePlaceholderProps = {
  label: string;
  eyebrow?: string;
};

export function ImagePlaceholder({
  label,
  eyebrow = "Vorbereiteter Bildblock",
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-gray-100 shadow-sm"
    >
      <div className="industrial-grid absolute inset-0 opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,220,2,0.08),transparent_40%)]" />
      <div className="relative flex aspect-[4/3] flex-col justify-between p-6 sm:p-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-500">
            {eyebrow}
          </p>
          <div className="mt-4 h-px w-20 bg-zinc-300" />
        </div>
        <div className="max-w-sm">
          <p className="text-2xl font-semibold tracking-tight text-zinc-700">{label}</p>
          <p className="mt-3 text-sm leading-7 text-zinc-500">
            Dieser Bereich ist als Platzhalter für ein späteres Leistungsbild, Referenzfoto
            oder Maschinenmotiv vorbereitet.
          </p>
        </div>
      </div>
    </div>
  );
}
