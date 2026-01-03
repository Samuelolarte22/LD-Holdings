import Image from "next/image";
import logo from "../public/logo.png"; // Ajusta la ruta a tu logo

export default function Footer() {
  return (
    <footer className="bg-[#000] py-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Logo y Empresa */}
          <div className="flex flex-col items-start">
            <div className="mb-4">
              <Image src="/logo_f.png" alt="LD Holdings Group" width={180} height={90} className="object-contain"/>
            </div>
            <p className="text-gray-400 text-sm">
              Innovando con soluciones financieras de alto nivel.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Servicios</h3>
            <ul className="space-y-1">
              <li>
                <a href="/consultoria" className="hover:text-white transition duration-300 transform hover:scale-105">Consultoría</a>
              </li>
              <li>
                <a href="/inversiones" className="hover:text-white transition duration-300 transform hover:scale-105">Inversiones</a>
              </li>
              <li>
                <a href="/asesoria" className="hover:text-white transition duration-300 transform hover:scale-105">Asesoría financiera</a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Contacto</h3>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li>Email: <a href="mailto:info@ldholdingsgroup.org" className="hover:text-white transition duration-300">info@ldholdingsgroup.org</a></li>
              <li>Tel: <a href="tel:+573177848600" className="hover:text-white transition duration-300">+57 317 7848600</a></li>
              <li>Dirección: Bogotá, Colombia</li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Síguenos</h3>
            <div className="flex space-x-4 mt-2">
              {/* LinkedIn */}
              <a href="#" className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v16h-4V8zm7 0h3.6v2.2h.05c.5-.95 1.72-1.95 3.54-1.95 3.78 0 4.48 2.48 4.48 5.7V24h-4V15.7c0-2.02-.04-4.62-2.82-4.62-2.82 0-3.26 2.22-3.26 4.5V24h-4V8z"/>
                </svg>
              </a>
              {/* Twitter */}
              <a href="#" className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.56c-.89.39-1.84.65-2.84.77a4.93 4.93 0 0 0 2.16-2.72 9.86 9.86 0 0 1-3.13 1.2 4.92 4.92 0 0 0-8.39 4.48A13.95 13.95 0 0 1 1.67 3.15a4.92 4.92 0 0 0 1.52 6.57 4.9 4.9 0 0 1-2.23-.62v.06a4.92 4.92 0 0 0 3.95 4.82 4.93 4.93 0 0 1-2.22.08 4.93 4.93 0 0 0 4.6 3.42A9.87 9.87 0 0 1 0 19.54a13.93 13.93 0 0 0 7.55 2.21c9.05 0 14-7.5 14-14v-.64a10.03 10.03 0 0 0 2.46-2.56z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12v-9.294H9.293V11.03H12V8.414c0-2.675 1.633-4.132 4.02-4.132 1.14 0 2.118.085 2.404.123v2.78h-1.647c-1.292 0-1.542.614-1.542 1.515v1.99h3.084l-.402 3.676H15.235V24h7.44c.73 0 1.325-.593 1.325-1.326V1.326C24 .593 23.407 0 22.675 0z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Separador y derechos de autor */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} LD Holdings Group. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
