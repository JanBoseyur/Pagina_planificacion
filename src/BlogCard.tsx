type BlogProps = {
  tag: string;
  title: string;
  excerpt: string;
};

export function BlogCard({ tag, title, excerpt }: BlogProps) {
  return (
    <article className="flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/70 p-4">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
        {tag}
      </p>
      <h3 className="mt-2 text-sm font-semibold text-slate-50">{title}</h3>
      <p className="mt-2 text-xs text-slate-300">{excerpt}</p>
      <p className="mt-3 text-[11px] text-emerald-300">
        Leer más (mockup para el proyecto)
      </p>
    </article>
  );
}
