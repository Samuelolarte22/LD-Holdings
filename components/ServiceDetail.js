"use client";

import Image from "next/image";

export default function ServiceDetail({ servicio }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
      {/* Imagen */}
      <div className="relative w-full h-64 mb-6">
        <Image
          src={servicio.imagen}
          alt={servicio.titulo}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Título */}
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        {servicio.titulo}
      </h2>
      <p className="text-gray-600 mb-6">{servicio.descripcion}</p>

      {/* Beneficios */}
      <h3 className="text-xl font-semibold mb-3">Beneficios</h3>
      <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
        {servicio.beneficios.map((beneficio, index) => (
          <li key={index}>{beneficio}</li>
        ))}
      </ul>

      {/* Pasos */}
      <h3 className="text-xl font-semibold mb-3">Nuestro Proceso</h3>
      <ol className="space-y-3">
        {servicio.pasos.map((paso, index) => (
          <li
            key={index}
            className="p-4 border rounded-lg bg-gray-50 shadow-sm"
          >
            <h4 className="font-bold text-gray-800">
              {index + 1}. {paso.titulo}
            </h4>
            <p className="text-gray-600">{paso.detalle}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
