"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Slide = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

const SLIDES: Slide[] = [
  {
    src: "/CarbonDashboard.png",
    alt: "Dashboard general de huella de carbono",
    title: "Qué hacemos",
    description:
      "Mostramos en un solo panel la huella de carbono y los consumos clave de tu PYME.",
  },
  {
    src: "/CarbonReport.png",
    alt: "Reporte automático de huella de carbono",
    title: "Por qué lo hacemos",
    description:
      "Generamos reportes profesionales listos para licitaciones, bancos y clientes.",
  },
  {
    src: "/ConsumoDatos.png",
    alt: "Formulario guiado para ingresar datos de consumo",
    title: "Cómo lo hacemos",
    description:
      "Te guiamos paso a paso para ingresar tus consumos sin necesidad de ser experto.",
  },
  {
    src: "/DiagnosticoInicial.png",
    alt: "Diagnóstico inicial de la empresa",
    title: "Primer paso",
    description:
      "Comienzas con un diagnóstico rápido que adapta la plataforma a tu realidad.",
  },
];

export default function AutoCarousel() {
  const [index, setIndex] = useState(0);

  // Cambia la imagen automáticamente cada 2.5 segundos
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % SLIDES.length),
      2500
    );
    return () => clearInterval(interval);
  }, []);

  const current = SLIDES[index];

  return (
    <div className="relative w-full mx-auto h-64 sm:h-72 md:h-96 lg:h-[480px] rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/80 shadow-xl shadow-emerald-500/10">
      {/* Imágenes con fade */}
      {SLIDES.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          className={`object-contain md:object-cover transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          priority={i === 0}
        />
      ))}

      {/* Overlay de texto (título + descripción) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent p-4 sm:p-5">
        <p className="text-[11px] font-semibold text-emerald-300 uppercase tracking-[0.18em]">
          {current.title}
        </p>
        <p className="mt-1 text-xs sm:text-[13px] text-slate-200 max-w-xl">
          {current.description}
        </p>
      </div>

      {/* Dots del carrusel */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-4 bg-emerald-400" : "w-2 bg-slate-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
