import { BlogCard } from "@/src/BlogCard";

export default function BlogSection() {
  return (
    <section id="blog" className="border-t border-slate-800 pt-10">
      <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
        5. Blog corporativo.
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-slate-300">
        Contenido de inbound marketing pensado para atraer tráfico orgánico por
        intereses psicográficos de dueños y administradores de PYMES. Aquí no
        hablamos del producto, hablamos de sus desafíos.
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <BlogCard
          tag="Eficiencia energética"
          title="5 acciones simples para bajar tu consumo de energía en un 15%."
          excerpt="Iluminación LED, mantención de equipos y horarios inteligentes pueden generar ahorros reales sin grandes inversiones."
        />
        <BlogCard
          tag="Huella de carbono"
          title="Huella de carbono para PYMES: una guía rápida para Temuco."
          excerpt="Qué es, cómo se mide y por qué cada vez más clientes y bancos la exigen como requisito mínimo."
        />
      </div>
    </section>
  );
}
