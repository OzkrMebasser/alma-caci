"use client";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaAngleRight,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar la suscripción
    setEmail("");
    alert("¡Gracias por suscribirte!");
  };

  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Footer Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Columna 1: Acerca de */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/caci-alma.appspot.com/o/ALMAlogotransparent.png?alt=media&token=1e14c45a-252e-47bf-9345-372fa7e759e5"
                alt="Logo ALMA"
                className="h-24"
              />
            </div>
            <p className="text-gray-600 leading-relaxed">
              Centro de Atención Familiar A.C. — Formación con amor y propósito.
              Acompañamos procesos que fortalecen el desarrollo integral de las
              familias.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="bg-white p-2 rounded-full shadow-md text-gray-700 hover:text-white hover:bg-[#fb6909] transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-lg" />
              </a>
              <a
                href="#"
                className="bg-white p-2 rounded-full shadow-md text-gray-700 hover:text-white hover:bg-[#fb6909] transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="#"
                className="bg-white p-2 rounded-full shadow-md text-gray-700 hover:text-white hover:bg-[#fb6909] transition-all duration-300 transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-lg" />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-[#2727d9]">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Inicio", href: "/" },
                { label: "Nosotros", href: "/about" },
                { label: "Servicios", href: "/services" },
                { label: "Contacto", href: "/contact" },
                { label: "Blog", href: "/blog" },
              ].map((item) => (
                <li key={item.href} className="group">
                  <a
                    href={item.href}
                    className="relative inline-block text-gray-600 hover:text-[#fb6909] transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#fb6909] hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-[#2727d9]">
              Contáctanos
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-[#fb6909] mt-1 mr-3" />
                <span className="text-gray-600">
                  Playa del Carmen, Quintana Roo, México
                </span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-[#fb6909] mr-3" />
                <a
                  href="mailto:info@almaac.org"
                  className="text-gray-600 hover:text-[#fb6909] transition-colors duration-300"
                >
                  info@almaac.org
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-[#fb6909] mr-3" />
                <a
                  href="tel:+529841234567"
                  className="text-gray-600 hover:text-[#fb6909] transition-colors duration-300"
                >
                  +52 984 123 4567
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Boletín */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-[#2727d9]">
              Mantente Informado
            </h3>
            <p className="text-gray-600">
              Suscríbete a nuestro boletín para recibir noticias y
              actualizaciones.
            </p>
            <form onSubmit={handleSubmit} className="relative mt-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#fb6909] focus:border-transparent transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-full px-4 bg-[#fb6909] text-white rounded-r-lg hover:bg-[#e35800] transition-colors duration-300"
              >
                Suscribir
              </button>
            </form>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} ALMA A.C. — Todos los derechos
            reservados.
          </p>
          <div className="mt-4 md:mt-0 flex gap-4">
            <a
              href="/privacy"
              className="hover:text-[#fb6909] transition-colors duration-300"
            >
              Política de Privacidad
            </a>
            <span>|</span>
            <a
              href="/terms"
              className="hover:text-[#fb6909] transition-colors duration-300"
            >
              Términos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
