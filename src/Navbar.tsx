import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500 font-bold">
            C
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-tight">CarbonPYME</p>
            <p className="text-[11px] text-slate-400">
              Huella de carbono para PYMES
            </p>
          </div>
        </div>

        <div className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a href="#que-hacemos" className="hover:text-emerald-400">
            Qué hacemos
          </a>
          <a href="#planes" className="hover:text-emerald-400">
            Planes
          </a>
          <a href="#blog" className="hover:text-emerald-400">
            Blog
          </a>
          <a href="#contacto" className="hover:text-emerald-400">
            Contacto
          </a>
        </div>

        <Link
          href="#contacto"
          className="rounded-full bg-emerald-500 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400"
        >
          Agenda un diagnóstico gratis
        </Link>
      </nav>
    </header>
  );
}
