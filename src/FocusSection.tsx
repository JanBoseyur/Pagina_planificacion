import { FeatureCard } from "@/src/FeatureCard";

export default function FocusSection() {
  return (
    
    <section
      id = "que-hacemos"
      className = "border-t border-slate-800 pt-10"
    >
      <h2 className = "text-xl font-semibold tracking-tight sm:text-2xl text-green-700">
        Enfoque del producto: atributos clave de CarbonPYME.
      </h2>

      <p className = "mt-2 max-w-2xl text-sm text-slate-600">
        Nos enfocamos en resolver las barreras principales detectadas en PYMES
        de Temuco: precio, complejidad técnica y falta de tiempo para gestionar
        la sostenibilidad.
      </p>

      <div className = "mt-6 mb-6 grid gap-5 md:grid-cols-4">
        
        <FeatureCard
          title = "Súper simple"
          text = "Onboarding guiado paso a paso. No necesitas conocimientos técnicos en sostenibilidad."
        />
        <FeatureCard
          title = "Reportes automáticos"
          text = "Descarga tus reportes en PDF, comparte dashboards y usa datos en licitaciones."
        />
        <FeatureCard
          title = "Precio accesible"
          text = "Planes escalonados para microempresas y PYMES de 5 a 50 trabajadores."
        />
        <FeatureCard
          title = "Acompañamiento real"
          text = "Soporte remoto y talleres en alianza con actores como Araucanía Digital."
        />

      </div>
    </section>
  );
}
