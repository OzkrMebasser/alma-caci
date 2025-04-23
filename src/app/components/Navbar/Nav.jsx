"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import NavbarSub from "./NavbarSub";

const Nav = () => {
  const [showMainNav, setShowMainNav] = useState(true);
  const [scrollThreshold, setScrollThreshold] = useState(300); // Umbral inicial para pantallas grandes

  useEffect(() => {
    const handleResize = () => {
      // Cambiar umbral según el tamaño de la pantalla
      if (window.innerWidth < 1024) { 
        setScrollThreshold(50);
      } else { // Para pantallas grandes
        setScrollThreshold(300);
      }
    };

    // Inicializar el umbral al cargar
    handleResize();

    // Actualizar el umbral cuando cambia el tamaño de la ventana
    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setShowMainNav(false);
      } else {
        setShowMainNav(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpiar los eventos al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [scrollThreshold]); // Añadir scrollThreshold como dependencia

  return (
    <div className="fixed top-0 w-full z-50">
      <div
        className={`transition-all duration-100 ease-in-out ${
          showMainNav ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none absolute"
        }`}
      >
        <Navbar />
      </div>

      <div
        className={`transition-all duration-100 ease-in-out ${
          showMainNav ? "opacity-0 scale-0 pointer-events-none absolute" : "opacity-100 scale-100"
        }`}
      >
        <NavbarSub />
      </div>
    </div>
  );
};

export default Nav;
