"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { Briefcase, BarChart, Users, Quote, Lightbulb, Target, Globe, Building2, Hammer} from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Servicios from "./servicios/page";


// Animación fadeUp
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 }
  })
};

// Datos ficticios
const slides = [
  {
    img: "https://images.pexels.com/photos/3184635/pexels-photo-3184635.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Soluciones Financieras Integrales",
    text: "Convertimos tus decisiones financieras en crecimiento empresarial."
  },
  {
    img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Consultoría Estratégica",
    text: "Ejecución de nuestra experiencia en planificación y estrategias para un crecimiento sostenible."
  },
  {
    img: "https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Guía Corporativa",
    text: "Acompañamiento en cada etapa de tu empresa."
  }
];

const servicios = [
  {
    
    icon: <Briefcase className="w-12 h-12 text-blue-600 from-blue-600/10 to-blue-200/10" />,
    color: "from-blue-600/10 to-blue-200/10",
    iconColor: "from-blue-500 to-blue-300",
    title: "Servicios Financieros y Legales",
    text: "Optimiza tus recursos y maximiza tus beneficios 💵",
    backText: "No se trata solo de rendimientos, sino de un patrimonio que perdura.",
  },
  {
    icon: <Hammer className="w-12 h-12 text-green-600" />,
    title: "Construcción y obras",
    text: "De la idea al concreto 👷‍♂️",
    backText: "Nuestro legado es hacer realidad lo que otros solo imaginan."
  },
  {
    icon: <Building2 className="w-12 h-12 text-purple-600" />,
    title: "Gestión Inmobiliaria",
    text: "Más control, más valor, menos preocupaciones 🏢",
    backText: "Excelencia en la administración inmobiliaria a la altura de tu hogar."
  }
];


// Posible Jessica Castellanos, Pedreros, Camila Daza, Santiago Cala.
const testimonios = [
  {
    text: "Gracias a LD Holdings ahora puedo invertir y no preocuparme por las deudas.",
    name: "Un Random",
    position: "Cosas de randoms",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    text: "Su equipo es profesional y siempre está dispuesto a brindar soluciones efectivas.",
    name: "Laura Pérez",
    position: "Directora - Grupo Empresarial LP",
    img: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    text: "Nos guiaron en cada paso de nuestro plan de expansión, con resultados excepcionales.",
    name: "Javier Gómez",
    position: "Fundador - StartUp X",
    img: "https://randomuser.me/api/portraits/men/54.jpg"
  }
];

//felipe vega, camila galeano, Samuel olarte, juan muñoz.
const equipo = [
  {
    name: "Felipe Vega",
    role: "Gerente Financiero",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Carlos Velasco",
    role: "Director Ejecutivo",
    img: "./CEO.png"
  },
  {
    name: "Samuel Olarte",
    role: "Directorz de Estrategia",
    img: "./sam.jpeg"
  },
  {
    name: "Camila Galeano",
    role: "Directora Departamento Legal",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Juan Muñoz",
    role: "N/A",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  }
];

const valores = [
  {
    icon: <Lightbulb className="w-12 h-12 text-yellow-500" />,
    title: "Innovación",
    text: "Apostamos por ideas creativas para resolver los desafíos empresariales."
  },
  {
    icon: <Target className="w-12 h-12 text-red-500" />,
    title: "Compromiso",
    text: "Nos implicamos al 100% en el éxito de nuestros clientes."
  },
  {
    icon: <Globe className="w-12 h-12 text-green-500" />,
    title: "Visión Global",
    text: "Entendemos los mercados internacionales y sus oportunidades."
  }
];

const casosExito = [
  { img: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Proyecto A", desc: "Descripción breve del proyecto A." },
  { img: "https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Proyecto B", desc: "Descripción breve del proyecto B." },
  { img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Proyecto C", desc: "Descripción breve del proyecto C." }
];

const blog = [
  { img: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Artículo 1", desc: "Resumen del artículo 1." },
  { img: "https://images.pexels.com/photos/3184470/pexels-photo-3184470.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Artículo 2", desc: "Resumen del artículo 2." },
  { img: "https://images.pexels.com/photos/3184480/pexels-photo-3184480.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Artículo 3", desc: "Resumen del artículo 3." }
];

// Componente Card3D
function Card3D({ children }) {
  return <div className="group perspective cursor-pointer">{children}</div>;
}

export default function Home() {
    // Intersection Observer para KPI
  const [kpiRef, kpiInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const kpis = [
    { number: 8, label: "Años de Experiencia", prefix: "+" },
    { number: 42, label: "Clientes Asesorados", prefix: "+" },
    { number: 95, label: "Satisfacción de Clientes", suffix: "%" }
  ];
  return (
    <div>
      {/* ---------------- SLIDER ---------------- */}
      <section className="relative w-full h-[80vh]">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="h-full"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-[80vh]">
                <Image src={slide.img} alt={slide.title} fill className="object-cover" priority={i === 0} />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                  <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-white text-4xl md:text-6xl font-bold mb-4 max-w-3xl">{slide.title}</motion.h1>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-white text-lg md:text-xl max-w-2xl">{slide.text}</motion.p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ---------------- SOBRE NOSOTROS ---------------- */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl text-[#FFF] font-bold mb-4">Sobre Nosotros</h2>
            <p className="text-white-600 mb-6">
              En LD Holdings desarrollamos soluciones financieras integrales que combinan asesoría, inversión 
              y planeación estratégica dentro de un solo ecosistema. 
            </p>

            <p className="mb-6">Acompañamos a nuestros clientes con estrategias claras,
               seguimiento constante y una visión enfocada en el crecimiento sostenible y la protección del patrimonio y sus 
               necesidades.</p>
            <Link href="/nuestra-empresa">
            <button className="px-6 py-3 bg-[#D4AF37] text-white rounded-lg hover:bg-gray-900 transition">
              Conoce más
            </button>
            </Link>
          </div>
          <div className="relative h-72 md:h-96">
            <Image
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Equipo de trabajo"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ---------------- SERVICIOS ---------------- */}
      <section className="py-16 bg-[#FFF]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl text-[#000000] font-bold text-center mb-12">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {servicios.map((service, i) => (
              <Card3D key={i}>
                <div className="group relative w-full h-64 [transform-style:preserve-3d] transition-transform duration-[800ms] ease-out hover:rotate-y-180" onClick={(e) => e.currentTarget.parentElement.classList.toggle("flipped")}>
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-100/200 p-6 rounded-xl shadow flex flex-col justify-center items-center backface-hidden">
                    {service.icon}
                    <h3 className="text-xl text-[#000000] font-semibold mt-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mt-2 text-center">
                      {service.text}
                    </p>
                  </div>

                  <div className="absolute inset-0 bg-[#D4AF37] text-white p-6 rounded-xl shadow flex flex-col justify-center items-center rotate-y-180 backface-hidden">
                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-center">{service.backText}</p>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- TESTIMONIOS ---------------- */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-[#FFF]">Lo que dicen nuestros clientes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonios.map((t, i) => (
              <motion.div key={i} className="bg-gray-50 p-6 rounded-xl shadow-lg text-[#000000]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.2 }}>
                <Quote className="w-10 h-10 text-[#D4AF37] mx-auto mb-4" />
                <p className="text-gray-700 italic mb-4">&quot;{t.text}&quot;</p>
                <Image src={t.img} alt={t.name} width={160} height={80} className="rounded-full mx-auto mb-2" />
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- EQUIPO ---------------- */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-[#000000]">Nuestro Equipo Directivo</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {equipo.map((m, i) => (
              <motion.div key={i} className="bg-white p-6 rounded-xl shadow-lg text-[#000000]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.2 }}>
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image src={m.img} alt={m.name} fill className="rounded-full object-cover" />
                </div>
                <h4 className="font-semibold text-lg">{m.name}</h4>
                <p className="text-gray-900">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- KPI CON CONTADOR ---------------- */}
      <motion.section ref={kpiRef} className="bg-[#000] py-16 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-[#D4AF37]">
          {kpis.map((stat, i) => (
            <motion.div key={i} custom={i} variants={fadeUp}>
              <h3 className="text-4xl font-bold">
                {kpiInView ? (
                  <CountUp start={0} end={stat.number} duration={2.5} prefix={stat.prefix || ""} suffix={stat.suffix || ""} />
                ) : (
                  0
                )}
              </h3>
              <p className="mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ---------------- CASOS DE ÉXITO ---------------- */}
      <motion.section className="py-16 bg-gray-50" initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#000000]">Casos de Éxito</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {casosExito.map((c, i) => (
              <Card3D key={i}>
                <motion.div custom={i} variants={fadeUp} className="bg-white rounded-xl shadow-lg overflow-hidden text-[#000000]">
                  <div className="relative w-full h-56">
                    <Image src={c.img} alt={c.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-xl mb-2">{c.title}</h3>
                    <p className="text-gray-600">{c.desc}</p>
                  </div>
                </motion.div>
              </Card3D>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ---------------- BLOG ---------------- */}
      <motion.section className="py-16 bg-black" initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#FFF]">Blog Corporativo</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blog.map((b, i) => (
              <Card3D key={i}>
                <motion.div custom={i} variants={fadeUp} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden text-[#000000]">
                  <div className="relative w-full h-56">
                    <Image src={b.img} alt={b.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-xl mb-2">{b.title}</h3>
                    <p className="text-gray-600 mb-4">{b.desc}</p>
                    <button className="px-4 py-2 bg-[#D4AF37] text-white rounded-lg hover:bg-gray-900 transition">Leer más</button>
                  </div>
                </motion.div>
              </Card3D>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ---------------- CONTACTO + MAPA ---------------- */}
      <motion.section className="py-16 bg-gray-50" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          {/* Mapa */}
          <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2457.2666108608078!2d-74.11961172397024!3d4.6829840954588215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1767407564150!5m2!1ses!2sco"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              className="border-0"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Formulario */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            
            <h3 className="text-2xl font-bold mb-6 text-[#000000]">Contáctanos</h3>
            
            
            <form className="grid gap-4">
              <input type="text" placeholder="Nombre completo" className=" text-[#000000] w-full p-3 border border-[#D4AF37] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
              <input type="email" placeholder="Correo electrónico" className=" text-[#000000] w-full p-3 border border-[#D4AF37] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
              <input type="tel" placeholder="Teléfono" className=" text-[#000000] w-full p-3 border border-[#D4AF37] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
              <textarea placeholder="Mensaje" rows={4} className=" text-[#000000] w-full p-3 border border-[#D4AF37] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
              <button type="submit" className=" text-[#000000] px-6 py-3 bg-[#D4AF37] text-white rounded-lg hover:bg-gray-900 transition">Enviar</button>
            </form>
          </div>
        </div>
      </motion.section>

      {/* ---------------- CTA FINAL ---------------- */}
      <section className="bg-black text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Listo para hacer crecer tu empresa?</h2>
        <p className="mb-6">Contacta con nosotros hoy mismo y descubre cómo podemos ayudarte.</p>
        <button className="px-8 py-3 bg-[#D4AF37] rounded-lg hover:bg-gray-900 transition">
          Contáctanos
        </button>
      </section>

      {/* ---------------- ESTILOS ---------------- */}
      <style jsx>{`
        .perspective { perspective: 1000px; }
        .transform-style-preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .card-container { transition: transform 0.4s ease, box-shadow 0.3s ease; transform-style: preserve-3d; }
        .card-container:hover { transform: rotateX(5deg) rotateY(5deg) scale(1.03); box-shadow: 0 15px 25px rgba(0,0,0,0.15); }
        .group.flipped .card-container { transform: rotateY(180deg) scale(1.02); transition: transform 0.8s cubic-bezier(.68,-0.55,.27,1.55); }      

      `}</style>
    </div>
  );
}
