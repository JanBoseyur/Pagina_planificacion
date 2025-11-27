import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-[11px] text-slate-400 sm:flex-row">
        <p>
          © {new Date().getFullYear()} CarbonPYME · Proyecto académico
          Universidad Católica de Temuco.
        </p>
        <div className="flex items-center gap-3">
          <span>Siguenos en:</span>
          <Link
            href="#"
            className="rounded-full bg-slate-900 px-3 py-1 text-xs hover:bg-slate-800"
          >
            Instagram
          </Link>
          <Link
            href="#"
            className="rounded-full bg-slate-900 px-3 py-1 text-xs hover:bg-slate-800"
          >
            TikTok
          </Link>
        </div>
      </div>
    </footer>
  );
}
