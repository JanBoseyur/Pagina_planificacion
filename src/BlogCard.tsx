type BlogProps = {
  tag: string;
  title: string;
  excerpt: string;
};

export function BlogCard({ tag, title, excerpt }: BlogProps) {
  return (
    <article className = "flex flex-col justify-between rounded-3xl border border-slate-900 bg-slate-200/70 p-4">
      
      <p className = "text-[11px] font-semibold uppercase tracking-[0.18em] text-green-700">
        {tag}
      </p>
      <h3 className = "mt-2 text-sm font-semibold text-green-900">{title}</h3>
      <p className = "mt-2 text-slate-800">{excerpt}</p>
      <p className = "mt-3 text-[12px] text-emerald-600">
        Leer más (mockup para el proyecto)
      </p>

    </article>
  );
}
