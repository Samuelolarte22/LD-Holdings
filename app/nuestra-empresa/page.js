"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaRocket, FaBullseye, FaHandshake } from "react-icons/fa6";

export default function NuestraEmpresa() {
  return (
    <div className="font-sans">
      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
        <Image
          src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Nuestra Empresa"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-4xl md:text-6xl font-extrabold tracking-wide"
        >
          Conectando Innovación con Confianza
        </motion.h1>
      </section>

      {/* SOBRE NOSOTROS */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900"
        >
          Nuestra Empresa
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg text-gray-700 text-justify leading-relaxed tracking-wide max-w-4xl mx-auto mb-16"
        >
          LD Holdings es un conglomerado de empresas que, a través de sus
          productos y servicios, busca brindar bienestar, comodidad y soluciones
          efectivas a las necesidades de sus clientes.
          <br />
          <br />
          Partimos de la confianza mutua entre empresa y cliente, y vamos más
          allá de los números y las ganancias. Apostamos por la diversificación
          y la innovación constante para ofrecer un servicio de excelencia en
          cada una de las áreas en las que operamos. Así, cada persona que forma
          parte de nuestro ecosistema se siente segura, respaldada y en buenas
          manos.
          <br />
          <br />
          Como holding, nuestra visión es abarcar una amplia gama de productos y
          servicios sin perder de vista nuestro propósito: innovar continuamente
          y cuidar de nuestros colaboradores y clientes. Queremos crecer y
          evolucionar junto a la comunidad que se forma alrededor de cada una de
          nuestras actividades.
        </motion.p>

        {/* Misión, Visión, Valores */}
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Misión",
              text: "Construir y gestionar empresas líderes en cada uno de los sectores en los que participamos, ofreciendo productos y servicios de alta calidad enfocados en la innovación, la eficiencia y la sostenibilidad. Nos impulsa el compromiso y la pasión por desarrollar una infraestructura funcional que promueva el crecimiento continuo de nuestra comunidad, generando oportunidades y bienestar para nuestros colaboradores, socios y clientes.",
              icon: (
                <FaRocket className="text-blue-600 text-5xl mb-4 mx-auto" />
              ),
            },
            {
              title: "Visión",
              text: "Ser el holding de referencia en nuestras industrias, destacándonos por la excelencia operativa, el impacto positivo en la sociedad y la capacidad de adaptación a los cambios del mercado para mantenernos siempre a la vanguardia. Nos inspira transformar comunidades y sectores a través de modelos de negocio sostenibles y escalables, donde cada integrante —colaborador, socio o cliente— se sienta apasionado por el rol que desempeña, dejando un legado de progreso y desarrollo.",
              icon: (
                <FaBullseye className="text-green-600 text-5xl mb-4 mx-auto" />
              ),
            },
            {
              title: "Valores",
              text: "Compromiso, creatividad, integridad y excelencia en cada proyecto. Cada acción refleja nuestra filosofía de confianza y respeto hacia colaboradores, clientes y aliados estratégicos.",
              icon: (
                <FaHandshake className="text-purple-600 text-5xl mb-4 mx-auto" />
              ),
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-2xl p-8 text-justify hover:shadow-2xl transition duration-300"
            >
              {item.icon}
              <h3 className="text-xl text-center font-bold mb-4 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      {/* Timeline Section (Vertical Alternada) */}
<section className="bg-gray-50 py-20" id="timeline">
  <div className="max-w-6xl mx-auto px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
      Nuestra Historia
    </h2>

    <div className="relative">
      {/* Línea central */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-blue-400"></div>

      {[
        {
          year: "2018",
          title: "Fundación",
          text: "Nacimos con la visión de transformar el sector con soluciones tecnológicas innovadoras.",
          color: "bg-blue-600",
        },
        {
          year: "2020",
          title: "Expansión",
          text: "Logramos consolidarnos en el mercado nacional con proyectos de gran impacto.",
          color: "bg-green-600",
        },
        {
          year: "2022",
          title: "Innovación",
          text: "Introdujimos nuevas tecnologías basadas en la nube y soluciones escalables.",
          color: "bg-yellow-500",
        },
        {
          year: "2025",
          title: "Futuro",
          text: "Seguimos evolucionando para convertirnos en un referente internacional.",
          color: "bg-purple-600",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          viewport={{ once: true }}
          className={`mb-16 flex items-center w-full ${
            i % 2 === 0 ? "justify-start" : "justify-end"
          }`}
        >
          <div className="relative w-full md:w-1/2">
            {/* Punto del timeline */}
            <span
              className={`absolute top-4 ${
                i % 2 === 0 ? "-right-6" : "-left-6"
              } w-10 h-10 ${item.color} rounded-full flex items-center justify-center text-white font-bold shadow-lg ring-8 ring-white`}
            >
              {item.year}
            </span>

            {/* Tarjeta */}
            <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8 hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.text}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      


      {/* CTA FINAL */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          ¿Quieres ser parte de nuestra historia?
        </motion.h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
          Contáctanos y descubre cómo podemos ayudarte a crecer con soluciones
          innovadoras y confiables.
        </p>
        <a
          href="/contacto"
          className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Contáctanos
        </a>
      </section>
    </div>
  );
}
