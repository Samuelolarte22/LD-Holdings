"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center px-4">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-9xl font-bold text-blue-600 mb-4"
      >
        404
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-2xl md:text-3xl font-semibold mb-4"
      >
        Página no encontrada
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-600 mb-8 max-w-md"
      >
        Lo sentimos, no pudimos encontrar la página que buscas.  
        Puede que haya sido movida o que la dirección sea incorrecta.
      </motion.p>
      <motion.div whileHover={{ scale: 1.05 }}>
        <Link
          href="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          Volver al inicio
        </Link>
      </motion.div>
    </div>
  );
}
