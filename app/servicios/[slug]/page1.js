import { serviciosData } from "@/app/data/serviciosData";
import Image from "next/image"; // 🔥 IMPORTANTE: faltaba este import
import ServiceDetail from "@/components/ServiceDetail";

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
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Cabecera con imagen + info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Imagen relacionada */}
        <div className="relative w-full h-72">
          <Image
            src={servicio.imagen}
            alt={servicio.titulo}
            fill
            className="rounded-2xl shadow-lg object-cover"
            priority
          />
        </div>

        {/* Texto principal */}
        <div>
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            {servicio.titulo}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            {servicio.descripcion}
          </p>
        </div>
      </div>

      {/* Beneficios */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Beneficios principales
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicio.beneficios.map((beneficio, index) => (
            <li
              key={index}
              className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl shadow-sm border hover:shadow-md transition"
            >
              <span className="text-green-600 font-bold text-xl">✔</span>
              <span className="text-gray-700">{beneficio}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Pasos */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Nuestro proceso
        </h2>
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicio.pasos.map((paso, index) => (
            <li
              key={index}
              className="p-6 bg-white border rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 font-bold rounded-full">
                  {index + 1}
                </span>
                <h3 className="text-lg font-semibold">{paso.titulo}</h3>
              </div>
              <p className="text-gray-600">{paso.detalle}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
