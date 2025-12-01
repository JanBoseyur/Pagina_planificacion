type PlanProps = {
  name: string;
  price: string;
  highlight?: boolean;
  description: string;
  items: string[];
};

export function PlanCard({
  name,
  price,
  highlight,
  description,
  items,
}: PlanProps) {
  return (
    <div
      className = {`relative flex h-full flex-col rounded-3xl border p-5 ${
        highlight
          ? "border-emerald-400 bg-green-100 shadow-xl shadow-emerald-500/30"
          : "border-slate-900 bg-slate-200/70 p-4 "
      }`}
    >
      {highlight && (
        <span className = "absolute right-4 top-4 rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-semibold text-slate-950">
          Más elegido
        </span>
      )}
      <p className = "text-xs font-semibold text-green-800">{name}</p>
      <p className = "mt-1 text-lg font-bold text-green-300">{price}</p>
      <p className = "mt-2 text-xs text-slate-900">{description}</p>

      <ul className = "mt-3 flex flex-1 list-disc flex-col gap-1 pl-4 text-xs text-slate-900">
        {items.map((item) => (
          <li key = {item}>{item}</li>
        ))}
      </ul>

      <button className = "mt-4 w-full rounded-full border border-green-600 bg-slate-950/70 px-3 py-2 text-[11px] font-semibold text-emerald-300 hover:bg-slate-900">
        Simular contratación (mockup)
      </button>
    </div>
  );
}
