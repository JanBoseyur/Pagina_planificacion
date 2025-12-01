
import Link from "next/link";
import Image from 'next/image'

export default function Navbar() {
  return (
    <header style = {{ backgroundColor: 'white', borderWidth: 1, borderColor: 'green' }}
      className = "sticky top-0 z-20 border-slate-800 bg-blue bg-[url('/banner3.png')] bg-cover bg-center bg-no-repeat">
      
      <nav className ="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className = "flex items-center gap-2">

          <div style = {{ backgroundColor: 'white' }}>
            <Image
              style = {{ borderWidth: 1, borderColor: 'green', borderRadius: 600 }}
              src = "/logo.png"
              alt = "Logo de la empresa"
              width = {100}
              height = {100}
            />
          </div>
          
          <div className = "">
            
            <p className = "text-sm font-semibold tracking-tight text-black">CarbonPYME</p>
            <p className = "text-[11px] text-green-700">
              Huella de carbono para PYMES
            </p>

          </div>

        </div>

        <div className = "hidden gap-10 text-[19px] text-slate-600 md:flex">
          
          <a href = "#que-hacemos" className = "hover:text-green-700 hover:scale-120 transitionm">
            Qué hacemos
          </a>
          
          <a href = "#planes" className = "hover:text-green-700 hover:scale-120 transitionm">
            Planes
          </a>
          
          <a href = "#blog" className = "hover:text-green-700 hover:scale-120 transitionm">
            Blog
          </a>

          <a href = "#contacto" className = "hover:text-green-700 hover:scale-120 transitionm">
            Contacto
          </a>

        </div>

        <Link
          href="#contacto"
          className = "rounded-full bg-green-600 px-5 py-3 text-xs font-semibold text-slate-950 shadow-lg shadow-green-100/30 hover:bg-emerald-400"
        >
          Agenda un diagnóstico gratis
        </Link>
      </nav>
    </header>
  );
}
