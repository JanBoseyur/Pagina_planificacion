type FeatureProps = {
  title: string;
  text: string;
};

export function FeatureCard({ title, text }: FeatureProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
      <p className="text-xs font-semibold text-emerald-300">{title}</p>
      <p className="mt-2 text-xs text-slate-200">{text}</p>
    </div>
  );
}
