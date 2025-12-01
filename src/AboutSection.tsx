export default function AboutSection() {
  return (

    <section
      id = "quienes-somos"
      className = "border-t border-slate-800 pt-10"
    >
      <h2 className = "text-xl font-semibold tracking-tight sm:text-2xl text-green-700">
        8. Quiénes somos.
      </h2>

      <div className = "mt-3 grid gap-6 md:grid-cols-[1.2fr,1fr] md:items-center">
        
        <p className = "text-sm text-slate-800">
          Somos un equipo de estudiantes de Ingeniería de la Universidad
          Católica de Temuco que investigó la realidad de las PYMES de la
          región en sostenibilidad y digitalización. A través de encuestas,
          entrevistas y análisis de datos, identificamos una brecha clara:
          muchas empresas quieren medir su huella de carbono, pero las
          soluciones actuales son caras o demasiado complejas.
          <br />
          <br />
          CarbonPYME nace como una respuesta a esa brecha: una plataforma
          accesible, local y construida desde la realidad del sur de Chile.
        </p>

        <div className = "rounded-3xl border border-slate-900 bg-slate-200/70 p-4 text-sm text-slate-200">
          
          <p className = "font-semibold text-green-700">
            Nuestro propósito
          </p>

          <p className = "mt-2 text-ms text-slate-800">
            Acompañar a las PYMES de Temuco y la Araucanía en su transición
            hacia una economía más sostenible, usando datos simples y
            tecnología cercana.
          </p>
          <p className = "mt-3 text-[12px] text-slate-600">
            “No queremos que la sostenibilidad sea un lujo para grandes
            empresas, sino una herramienta al alcance de cualquier
            emprendimiento.”
          </p>

        </div>
        
      </div>
    </section>
  );
}
