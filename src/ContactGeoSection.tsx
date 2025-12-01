export default function ContactGeoSection() {
  return (
    
    <section
      id = "contacto"
      className = "border-t border-slate-800 pt-10"
    >
      <h2 className = "text-xl font-semibold tracking-tight sm:text-2xl text-green-700">
        6 y 7. Contacto y geolocalización.
      </h2>
      
      <p className = "mt-2 max-w-xl text-sm text-slate-600">
        Establecemos un método de contacto claro, sugerencias estandarizadas
        (FAQ) y puntos de georreferencia para entender dónde operamos y a quién
        atendemos.
      </p>

      <div className = "mt-6 grid gap-8 md:grid-cols-[1.1fr,1fr]">
        {/* Formulario (mockup) */}
        
        <form className = "space-y-4 rounded-3xl border border-slate-900 bg-slate-200/70 p-5">
          
          <div>

            <label className = "mb-1 block text-sm font-medium text-green-700">
              Nombre y apellido
            </label>
            
            <input
              className = "w-full rounded-xl border border-slate-700 bg-slate-850 text-black px-5 py-3 text-xs outline-none ring-emerald-500/60 focus:ring"
              placeholder = "Ej: Carolina Pérez"
            />

          </div>
          
          <div>
            
            <label className = "mb-1 block text-sm font-medium text-green-700">
              Nombre de la PYME
            </label>
            
            <input
              className = "w-full rounded-xl border border-slate-700 bg-slate-850 text-black px-5 py-3 text-xs outline-none ring-emerald-500/60 focus:ring"
              placeholder = "Ej: Restaurante Los Coihues"
            />

          </div>

          <div className = "grid gap-3 md:grid-cols-2">
            
            <div>
              
              <label className = "mb-1 block text-sm font-medium text-green-700">
                Correo
              </label>
              
              <input
                className = "w-full rounded-xl border border-slate-700 bg-slate-850 text-black px-5 py-3 text-xs outline-none ring-emerald-500/60 focus:ring"
                placeholder = "contacto@ejemplo.cl"
              />

            </div>

            <div>

              <label className = "mb-1 block text-sm font-medium text-green-700">
                Sector
              </label>
              
              <select className = "w-full rounded-xl border border-slate-700 bg-slate-850 text-black px-5 py-3 text-xs outline-none ring-emerald-500/60 focus:ring">
                <option>Gastronomía</option>
                <option>Servicios profesionales</option>
                <option>Manufactura ligera</option>
                <option>Comercio / Retail</option>
                <option>Otro</option>
              </select>

            </div>

          </div>

          <div>

            <label className = "mb-1 block text-sm font-medium text-green-700">
              ¿Qué te gustaría mejorar?
            </label>
            
            <textarea
              rows = {3}
              className = "w-full rounded-xl border border-slate-700 bg-slate-850 text-black px-5 py-3 text-xs outline-none ring-emerald-500/60 focus:ring"
              placeholder = "Ej: reducir consumo de energía, entender huella de carbono, preparar reportes para licitaciones..."
            />

          </div>
          
          <button
            type = "button"
            className = "w-full rounded-full bg-green-600 px-5 py-3 text-xs font-semibold text-slate-950 shadow-lg shadow-green-100/30 hover:bg-emerald-400"
          >
            Enviar (mockup)
          </button>

          <p className = "text-[12px] text-slate-800">
            Para efectos del curso, este formulario no envía datos reales.
          </p>

        </form>

        {/* Geo + FAQ */}
        <div className = "space-y-4 text-sm text-slate-200">
          
          <div className = "rounded-3xl border border-slate-900 bg-slate-200/70 p-4">
            
            <p className = "text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
              Geolocalización
            </p>

            <p className = "mt-2 text-ms text-slate-800">
              Proyecto desarrollado en Temuco, con foco en PYMES de la Región
              de La Araucanía.
            </p>

            <p className = "mt-3 text-[11px] text-slate-700">
              En una implementación real, aquí se integraría un mapa (Google
              Maps) y la dirección física del centro de operaciones.
            </p>

          </div>

          <div className = "rounded-3xl mb-6 border border-slate-900 bg-slate-200/70 p-4">
            
            <p className = "text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
              Preguntas frecuentes
            </p>

            <ul className = "mt-2 space-y-2 text-ms text-slate-800">
              
              <li>
                <span className = "font-semibold">
                  ¿Necesito conocimientos técnicos?
                </span>{" "}
                No, el sistema está pensado para dueños y administradores.
              </li>

              <li>
                <span className = "font-semibold">
                  ¿Puedo partir con un plan básico?
                </span>{" "}
                Sí, puedes comenzar con una versión pequeña y escalar si lo
                necesitas.
              </li>

              <li>
                <span className = "font-semibold">
                  ¿Sirve para licitaciones?
                </span>{" "}
                La idea es que los reportes te ayuden a mostrar compromisos
                ambientales frente a clientes y organismos públicos.
              </li>

            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
