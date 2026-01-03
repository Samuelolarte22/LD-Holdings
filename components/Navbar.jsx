"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Estilo común para los iconos
  const iconStyle =
    "flex items-center justify-center w-9 h-9 rounded-full transition transform hover:scale-110";

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="LD-Holdings Logo"
              width={50}
              height={80}
              priority
            />
            <span className="font-bold text-xl text-gray-800">
              
            </span>
          </Link>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-[#000000] hover:text-[#0303b5] transition">
              Inicio
            </Link>
            <Link href="/nuestra-empresa" className="text-[#000000] hover:text-[#0303b5] transition">
              Nuestra Empresa
            </Link>
            <Link href="/servicios" className="text-[#000000] hover:text-[#0303b5] transition">
              Servicios
            </Link>
            <Link href="/contacto" className="text-[#000000] hover:text-[#0303b5] transition">
              Contacto
            </Link>
          </div>

          {/* Iconos redes sociales (fijos en desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${iconStyle} bg-gray-100 hover:bg-[#D4AF37] hover:text-[#0303b5] text-[#0303b5]`}
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${iconStyle} bg-gray-100 hover:bg-[#D4AF37] hover:text-[#0303b5] text-[#0303b5]`}
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${iconStyle} bg-gray-100 hover:bg-[#D4AF37] hover:text-[#0303b5] text-[#0303b5]`}
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Botón menú mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-4 space-y-4">
            <Link href="/" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-blue-600 transition">
              Inicio
            </Link>
            <Link href="/nuestra-empresa" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-blue-600 transition">
              Nuestra Empresa
            </Link>
            <Link href="/servicios" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-blue-600 transition">
              Servicios
            </Link>
            <Link href="/contacto" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-blue-600 transition">
              Contacto
            </Link>

            {/* Iconos redes sociales mobile */}
            <div className="flex items-center gap-4 pt-4 border-t">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${iconStyle} custom-icon bg-gray-100 hover:bg-blue-600 hover:text-white text-blue-600`}
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${iconStyle} custom-icon bg-gray-100 hover:bg-pink-500 hover:text-white text-pink-500`}
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${iconStyle} custom-icon bg-gray-100 hover:bg-blue-700 hover:text-white text-blue-700`}
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
