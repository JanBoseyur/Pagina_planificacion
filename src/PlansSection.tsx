import { PlanCard } from "@/src/PlanCard";

export default function PlansSection() {
  return (
    
    <section id = "planes" className = "border-t border-slate-800 pt-10">
      
      <div className = "flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        
        <div>

          <h2 className = "text-xl font-semibold tracking-tight sm:text-2xl text-green-700">
            4. Productos y servicios: planes CarbonPYME.
          </h2>
          
          <p className = "mt-2 max-w-xl text-sm text-slate-600">
            Establecemos nuestro producto estrella (plataforma CarbonPYME) y
            sus versiones según tamaño de empresa, alineado con las categorías
            de conversión vistas en clases.
          </p>

        </div>

        <p className = "text-xs text-slate-900">
          *Valores referenciales para la demo del proyecto.
        </p>
        
      </div>

      <div className = "mt-6 mb-6 grid gap-6 md:grid-cols-3">
        <PlanCard
          name = "Básico"
          price = "$4.990 / mes"
          highlight = {false}
          description = "Para microempresas que quieren dar su primer paso en sostenibilidad."
          items = {[
            "Diagnóstico inicial de huella",
            "Reporte simple en PDF",
            "Soporte por email",
          ]}
        />

        <PlanCard
          name = "Pro (Producto estrella)"
          price = "$12.000 / mes"
          highlight
          description = "Ideal para PYMES con 5–50 trabajadores que necesitan reportes y seguimiento."
          items = {[
            "Todos los del plan Básico",
            "Dashboard interactivo",
            "Recomendaciones personalizadas",
            "Exportación de datos",
          ]}
        />

        <PlanCard
          name = "Premium"
          price = "$39.000 / mes"
          highlight = {false}
          description = "Para empresas que requieren acompañamiento y soporte avanzado."
          items = {[
            "Todos los del plan Pro",
            "Acompañamiento en certificaciones",
            "Soporte prioritario",
            "Sesiones de revisión trimestrales",
          ]}
        />

      </div>
    </section>
  );
}
