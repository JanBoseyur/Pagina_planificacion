import AutoCarousel from "@/src/AutoCarousel";

export default function HeroSection() {
  return (
    <section
      id = "inicio"
      className = "grid gap-10 md:grid-cols-[1.1fr,1.1fr] md:items-center"
    >
      {/* Columna izquierda: texto, pregunta y CTA */}
      <div>
        <p className = "text-xs font-semibold uppercase tracking-[0.25em] text-green-600">
          Sostenibilidad · Digitalización · PYMES
        </p>

        {/* Pregunta que aborda el problema */}
        <h1 className = "mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-green-700">
          ¿Tu PYME quiere{" "}
          <span className = "bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            medir su huella de carbono
          </span>{" "}
          pero no sabe por dónde partir?
        </h1>

        <p className = "mt-4 max-w-xl text-sm text-slate-600 sm:text-base">
          CarbonPYME es una plataforma pensada para PYMES de Temuco y La
          Araucanía que quieren ser más sostenibles, cumplir normativas y
          ahorrar costos, sin procesos eternos ni consultorías caras.
        </p>

        {/* CTA principal + secundaria */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#contacto"
            className="rounded-full bg-green-600 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-green-100/30 hover:bg-emerald-400"
          >
            Agenda un diagnóstico gratis
          </a>
          <a
            href="#como-funciona"
            className="text-sm font-medium text-green-500 hover:text-emerald-200"
          >
            Ver cómo funciona →
          </a>
        </div>

        <p className="mt-4 text-xs text-slate-600">
          Basado en entrevistas y encuestas a PYMES reales de Temuco.
        </p>
      </div>

      {/* Columna derecha: carrusel automático grande */}
      <div className="space-y-3">
        <AutoCarousel />
      </div>
    </section>
  );
}
