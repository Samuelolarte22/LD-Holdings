import { serviciosData } from "@/app/data/serviciosData";
import Image from "next/image";
import { Briefcase, BarChart, Users, Quote, Lightbulb, Target, Globe, Building2, Hammer} from "lucide-react";

export async function generateStaticParams() {
  return serviciosData.map((servicio) => ({
    slug: servicio.id,
  }));
}

export default function ServiceDetailPage({ params }) {
  const { slug } = params;
  const servicio = serviciosData.find((s) => s.id === slug);

  if (!servicio) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold text-red-600">
          Servicio no encontrado
        </h1>
        <p className="text-gray-600 mt-2">
          Verifica la URL o selecciona un servicio válido.
        </p>
      </div>
    );
  }

  return (
     <div className="min-h-screen bg-gradient-to-br from-neutral-900 to-neutral-800 py-12 px-4 sm:px-6 flex justify-center">
      <div className="relative max-w-6xl w-full bg-neutral-900 rounded-2xl shadow-2xl p-6 sm:p-10 border border-amber-500/30 overflow-hidden">

        {/* LÍNEAS DIAGONALES SUPERIORES */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-amber-400 to-amber-600 -skew-y-3 origin-top-left opacity-90" />
        <div className="absolute top-16 left-0 w-full h-2 bg-black/60 -skew-y-3 origin-top-left" />

        {/* HERO */}
        <div className="relative w-full h-[220px] sm:h-[320px] md:h-[420px] rounded-xl overflow-hidden shadow-lg mt-16">
          <Image
            src={servicio.imagen}
            alt={servicio.titulo}
            fill
            className="object-cover scale-105 hover:scale-110 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* TITULO */}
        <div className="text-center mt-10 mb-14 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-amber-400 tracking-wide uppercase mb-4">
            {servicio.titulo}
          </h1>
          <p className="text-gray-200 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            {servicio.descripcion}
          </p>
        </div>

        {/* BENEFICIOS */}
        <section className="mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-amber-400 uppercase mb-8">
            Beneficios principales
          </h2>

          <ul  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {servicio.beneficios.map((beneficio, index) => (
              <li
                key={index}
                className="bg-neutral-800 border border-amber-500/30 rounded-xl p-6 text-center
                           transform hover:-translate-y-2 hover:shadow-amber-500/20
                           transition-all duration-300"
                          
              >
                <p className="text-gray-200 font-medium">
                  {beneficio}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* PROCESO */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-center text-amber-400 uppercase mb-10">
            Nuestro proceso
          </h2>

          <ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {servicio.pasos.map((paso, index) => (
              <li
                key={index}
                className="bg-neutral-800 border border-amber-500/30 rounded-xl p-6
                           text-center hover:shadow-amber-500/20 transition-all duration-300"
              >
                <div className="flex flex-col items-center mb-4">
                  <span className="w-12 h-12 flex items-center justify-center
                                   bg-amber-400 text-black font-bold rounded-full mb-3">
                    {index + 1}
                  </span>
                  <h3 className="text-gray-100 font-semibold text-lg">
                    {paso.titulo}
                  </h3>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {paso.detalle}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* LÍNEAS DIAGONALES INFERIORES */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-r from-amber-400 to-amber-600 skew-y-3 origin-bottom-left opacity-90" />
      </div>
    </div>
  );
}
