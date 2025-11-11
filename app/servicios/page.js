"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Briefcase,
  FileText,
  Scale,
  PiggyBank,
  DollarSign,
  Building2,
  Hammer,
  Zap,
  Layers,
  ShoppingCart,
  Home,
} from "lucide-react";

export default function Servicios() {
  const grupos = [
    {
      titulo: "Servicios Financieros y Legales",
      color: "from-blue-600/10 to-blue-200/10",
      iconColor: "from-blue-500 to-blue-300",
      servicios: [
        {
          nombre: "Asesoría financiera",
          descripcion:
            "Optimización de recursos, planeación y estrategias para tu estabilidad financiera.",
          icono: Briefcase,
          slug: "asesoria-financiera",
        },
        {
          nombre: "Asesoría tributaria",
          descripcion:
            "Cumplimiento normativo y estrategias fiscales que cuidan tus finanzas.",
          icono: FileText,
          slug: "asesoria-tributaria",
        },
        {
          nombre: "Asesoría legal",
          descripcion:
            "Apoyo jurídico especializado en procesos empresariales y personales.",
          icono: Scale,
          slug: "asesoria-legal",
        },
        {
          nombre: "Fondo de inversión",
          descripcion:
            "Opciones de inversión seguras y diversificadas para hacer crecer tu capital.",
          icono: PiggyBank,
          slug: "fondo-inversion",
        },
        {
          nombre: "Financiación de proyectos",
          descripcion:
            "Estructuración y gestión de recursos para proyectos de alto impacto.",
          icono: DollarSign,
          slug: "financiacion-proyectos",
        },
      ],
    },
    {
      titulo: "Construcción y Obras",
      color: "from-green-600/10 to-green-200/10",
      iconColor: "from-green-500 to-green-300",
      servicios: [
        {
          nombre: "Obras civiles",
          descripcion:
            "Desarrollo de proyectos de construcción con altos estándares de calidad.",
          icono: Building2,
          slug: "obras-civiles",
        },
        {
          nombre: "Remodelación",
          descripcion:
            "Renovamos y transformamos espacios para darles mayor valor y funcionalidad.",
          icono: Hammer,
          slug: "remodelacion",
        },
        {
          nombre: "Certificaciones eléctricas",
          descripcion:
            "Garantizamos la seguridad de tus instalaciones con certificaciones avaladas.",
          icono: Zap,
          slug: "certificaciones-electricas",
        },
        {
          nombre: "Modelado 3D",
          descripcion:
            "Representaciones digitales avanzadas para visualizar proyectos antes de construir.",
          icono: Layers,
          slug: "modelado-3d",
        },
        {
          nombre: "Comercialización de materiales",
          descripcion:
            "Suministro confiable de materiales de alta calidad para tus obras.",
          icono: ShoppingCart,
          slug: "materiales-construccion",
        },
      ],
    },
    {
      titulo: "Gestión Inmobiliaria",
      color: "from-purple-600/10 to-purple-200/10",
      color: "from-purple-600/10 to-purple-200/10",
      iconColor: "from-purple-500 to-purple-300",
      servicios: [
        {
          nombre: "Venta y gestión de inmuebles",
          descripcion:
            "Asesoría integral en compra, venta y administración de propiedades.",
          icono: Home,
          slug: "venta-gestion-inmuebles",
        },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Hero */}
      <div className="text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-gray-900 mb-6"
        >
          Nuestros Servicios
        </motion.h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Soluciones integrales que impulsan tu crecimiento financiero, empresarial e inmobiliario con respaldo y experiencia.
        </p>
      </div>

      {/* Grupos */}
      <div className="space-y-28">
        {grupos.map((grupo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`rounded-3xl p-10 bg-gradient-to-br ${grupo.color} backdrop-blur-sm shadow-lg`}
          >
            <h2 className="text-3xl font-bold text-center mb-14 text-gray-800 relative inline-block mx-auto after:block after:h-[3px] after:w-16 after:bg-blue-500 after:mx-auto after:mt-3">
              {grupo.titulo}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {grupo.servicios.map((servicio, j) => (
                <Link key={j} href={`/servicios/${servicio.slug}`}>
                  <motion.div
                    whileHover={{ rotateX: 5, rotateY: -5, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-gray-100 hover:shadow-2xl transition cursor-pointer flex flex-col group relative overflow-hidden"
                  >
                    {/* Halo animado */}
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-tr ${grupo.iconColor} opacity-20 blur-2xl`}
                    />

                    {/* Icono */}
                    <div className="mb-6 flex justify-center relative z-10">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${grupo.iconColor} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <servicio.icono className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 text-gray-900 text-center relative z-10">
                      {servicio.nombre}
                    </h3>
                    <p className="text-gray-600 text-sm flex-grow text-center relative z-10">
                      {servicio.descripcion}
                    </p>

                    <span className="mt-5 block text-blue-600 font-medium relative w-max mx-auto group-hover:underline z-10">
                      Ver más →
                    </span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      {/* Sección: Proceso de trabajo */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-32 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-14">
          Nuestro Proceso de Trabajo
        </h2>
        <div className="grid md:grid-cols-4 gap-10 max-w-5xl mx-auto">
          {[
            { paso: "1", titulo: "Análisis", desc: "Estudiamos tus necesidades y objetivos." },
            { paso: "2", titulo: "Estrategia", desc: "Definimos un plan claro y viable." },
            { paso: "3", titulo: "Implementación", desc: "Ejecutamos la solución de forma ágil." },
            { paso: "4", titulo: "Soporte", desc: "Acompañamiento constante en cada etapa." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-blue-600"
            >
              <div className="text-2xl font-bold text-blue-600">{item.paso}</div>
              <h3 className="mt-3 font-semibold text-gray-900">{item.titulo}</h3>
              <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Sección: Testimonios */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-32 bg-gray-50 py-20 px-6 rounded-3xl"
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Lo que dicen nuestros clientes
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <p className="italic text-gray-700">
              “Gracias a su asesoría, nuestra empresa logró reducir costos y mejorar la eficiencia.”
            </p>
            <h4 className="mt-4 font-semibold text-gray-900">– Juan Pérez, CEO</h4>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <p className="italic text-gray-700">
              “El acompañamiento fue excelente en todo el proceso de remodelación.”
            </p>
            <h4 className="mt-4 font-semibold text-gray-900">– María López, Gerente de Operaciones</h4>
          </div>
        </div>
      </motion.div>

      {/* Sección: Preguntas Frecuentes */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-32"
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Preguntas Frecuentes
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <details className="bg-white p-6 rounded-xl shadow cursor-pointer">
            <summary className="font-semibold text-gray-900">
              ¿Trabajan con empresas pequeñas?
            </summary>
            <p className="mt-2 text-gray-600">
              Sí, adaptamos nuestras soluciones tanto para pymes como para grandes corporaciones.
            </p>
          </details>
          <details className="bg-white p-6 rounded-xl shadow cursor-pointer">
            <summary className="font-semibold text-gray-900">
              ¿Qué beneficios obtengo al contratar sus servicios?
            </summary>
            <p className="mt-2 text-gray-600">
              Garantizamos mejoras en productividad, optimización de costos y soporte constante.
            </p>
          </details>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-28 text-center bg-gradient-to-r from-blue-600 to-blue-500 py-14 px-8 rounded-3xl text-white shadow-2xl"
      >
        <h3 className="text-3xl font-bold mb-4">
          ¿Necesitas más información?
        </h3>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Nuestro equipo está listo para asesorarte en cada paso de tu proyecto.
        </p>
        <Link
          href="/contacto"
          className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition"
        >
          Contáctanos
        </Link>
      </motion.div>
    </div>
  );
}
