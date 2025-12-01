type FeatureProps = {
  title: string;
  text: string;
};

export function FeatureCard({ title, text }: FeatureProps) {
  return (
    <div className = "rounded-2xl border border-slate-900 bg-slate-200/70 p-4">
      <p className = "text-xs font-semibold text-green-700">{title}</p>
      <p className = "mt-2 text-slate-800">{text}</p>
    </div>
  );
}
