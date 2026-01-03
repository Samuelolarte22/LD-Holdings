"use client";
import { motion } from "framer-motion";

export default function Contacto() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="text-4xl font-bold text-center mb-6"
      >
        Contáctanos
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg text-white-600 text-center mb-12"
                >
                  Completa el siguiente formulario o comunícate con nosotros directamente.
                </motion.p>

                <form className="bg-[#000] shadow-lg rounded-lg p-6 space-y-4">
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full border border-[#D4AF37] rounded-lg px-4 py-2 
                        text-white placeholder-white
                        focus:ring-2 focus:ring-white-500"
            />

            <input
              type="email"
              placeholder="Tu correo"
              className="w-full border border-[#D4AF37] rounded-lg px-4 py-2 
                        text-white placeholder-white
                        focus:outline-none focus:ring-2 focus:ring-white-500"
            />

            <textarea
              placeholder="Tu mensaje"
              rows="5"
              className="w-full border border-[#D4AF37] rounded-lg px-4 py-2 
                        text-white placeholder-white
                        focus:outline-none focus:ring-2 focus:ring-white-500"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-[#D4AF37] text-white px-6 py-3 rounded-full shadow hover:bg-gray-900 transition"
            >
              Enviar mensaje
            </motion.button>
          </form>
              </div>
            );
          }
