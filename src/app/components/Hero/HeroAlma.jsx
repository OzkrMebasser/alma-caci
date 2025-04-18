"use client";

import { useState, useEffect } from "react";
import "./puzzleAlma.css";

const almaDefinitions = [
  {
    letter: "A",
    colorClass: "text-orange-500", // Clase de Tailwind para naranja
    title: "Amor",
    definition: "por ti mismo y por el prójimo.",
  },
  {
    letter: "L",
    colorClass: "text-red-600", // Clase de Tailwind para rojo
    title: "Libertad",
    definition: "emocional, espiritual.",
  },
  {
    letter: "M",
    colorClass: "text-yellow-400", // Clase de Tailwind para amarillo
    title: "Misericordia",
    definition: "por la gente que te rodea.",
  },
  {
    letter: "A",
    colorClass: "text-green-600", // Clase de Tailwind para verde
    title: "Alegría",
    definition: "por conquistar tus miedos para tener éxito.",
  },
];

const HeroAlma = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showText, setShowText] = useState(false); // Estado para mostrar/ocultar el texto

  // Efecto para cambiar el índice cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === almaDefinitions.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);

  // Sincronizar el texto con la animación
  useEffect(() => {
    // Mostrar el texto después de 2.5 segundos (50% de la animación)
    const showTimeout = setTimeout(() => setShowText(true), 3500);

    // Ocultar el texto después de otros 2.5 segundos (final de la animación)
    const hideTimeout = setTimeout(() => setShowText(false), 5000);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, [currentIndex]);

  const currentDefinition = almaDefinitions[currentIndex];

  return (
    <>
      {/* Contenido del array para pantallas grandes */}
      <div className="hidden lg:block w-full text-center mt-8">
        {showText && (
          <div className={`${currentDefinition.colorClass} text-xl font-bold lg:text-4xl`}>
            <strong>{currentDefinition.title}</strong> {currentDefinition.definition}
          </div>
        )}
      </div>

      <section className="relative w-full flex flex-col lg:flex-row items-center justify-between lg:px-4 py-0 lg:py-8">
        {/* Image */}
        <div className="w-full lg:w-1/2 mt-8 lg:pl-10 lg:mt-0">
          <img
            className="w-full h-[450px] object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/caci-alma.appspot.com/o/familia-ALMA-CACI-HERO.jpg?alt=media&token=f323da11-af59-4921-bda0-621e127efc5b"
            alt="Imagen ALMA"
          />

          {/* Contenido del array para dispositivos móviles */}
          <div className="lg:hidden px-4 flex justify-center w-full h-[4rem]  text-center items-center mt-4">
            {showText && (
              <div className={`${currentDefinition.colorClass} text-2xl font-bold lg:text-4xl`}>
                <strong>{currentDefinition.title}</strong> {currentDefinition.definition}
              </div>
            )}
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center">
          <div className="relative w-[85%] h-[350px] lg:w-[500px] lg:h-[450px] mx-auto p-0 lg:p-4 top-10 lg:top-0">
            {/* puzzle-left */}
            <div className="absolute top-0 left-0 h-1/4 w-1/4 bg-orange-500 border-[3px] border-orange-500 rounded-[10%] animate-move-left animation-delay-0 z-[1] text-white flex items-center justify-center">
              <span className="text-white font-bold text-5xl lg:text-7xl">A</span>
              <div className="absolute top-1/2 -right-[29%] h-[30%] w-[30%] border-2 border-l-orange-500 bg-orange-500 rounded-full -translate-y-1/2"></div>
              <div className="absolute left-1/2 -bottom-[29%] h-[30%] w-[30%] border-2 border-t-orange-500 bg-orange-500 rounded-full -translate-x-1/2"></div>
            </div>

            {/* puzzle-right */}
            <div className="absolute top-0 right-0 h-1/4 w-1/4 bg-red-600 border-[3px] border-red-600 rounded-[10%] animate-move-right animation-delay-500 text-white flex items-center justify-center">
              <span className="text-white font-bold text-5xl lg:text-7xl">L</span>
              <div className="absolute -top-[29%] left-1/2 h-[30%] w-[30%] border-2 border-b-red-600 bg-red-600 rounded-full -translate-x-1/2"></div>
              <div className="absolute top-1/2 -right-[7%] h-[30%] w-[30%] border-2 border-r-[white] bg-white rounded-full -translate-y-1/2"></div>
              <div className="absolute left-1/2 -bottom-[29%] h-[30%] w-[30%] border-2 border-t-transparent bg-red-600 rounded-full -translate-x-1/2"></div>
              <div className="absolute top-1/2 -left-[8%] h-[30%] w-[30%] border-2 border-l-transparent bg-white rounded-full -translate-y-1/2"></div>
            </div>

            {/* puzzle-left-lower */}
            <div className="absolute bottom-0 left-0 h-1/4 w-1/4 bg-yellow-400 border-2 rounded-[10%] animate-move-left-up animation-delay-1000 text-white flex items-center justify-center">
              <span className="text-white font-bold text-5xl lg:text-7xl">M</span>
              <div className="absolute -top-[8%] left-1/2 h-[30%] w-[30%] border-2 border-t-transparent bg-white rounded-full -translate-x-1/2"></div>
              <div className="absolute top-1/2 -right-[29%] h-[30%] w-[30%] border-2 border-l-transparent bg-yellow-400 rounded-full -translate-y-1/2"></div>
              <div className="absolute left-1/2 -bottom-[8%] h-[30%] w-[30%] border-2 border-b-transparent bg-white rounded-full -translate-x-1/2"></div>
              <div className="absolute top-1/2 -left-[8%] h-[30%] w-[30%] border-2 border-l-transparent bg-white rounded-full -translate-y-1/2"></div>
            </div>

            {/* puzzle-right-lower */}
            <div className="absolute bottom-0 right-0 h-1/4 w-1/4 bg-green-600 border-2 rounded-[10%] animate-move-right-up animation-delay-1500 z-[-1] text-white flex items-center justify-center">
              <span className="text-white font-bold text-5xl lg:text-7xl">A</span>
              <div className="absolute -top-[8%] left-1/2 h-[30%] w-[30%] border-2 border-t-transparent bg-white rounded-full -translate-x-1/2"></div>
              <div className="absolute top-1/2 -right-[29%] h-[30%] w-[30%] border-2 border-l-transparent bg-green-600 rounded-full -translate-y-1/2"></div>
              <div className="absolute left-1/2 -bottom-[8%] h-[30%] w-[30%] border-2 border-b-transparent bg-white rounded-full -translate-x-1/2"></div>
              <div className="absolute top-1/2 -left-[8%] h-[30%] w-[30%] border-2 border-l-transparent bg-white rounded-full -translate-y-1/2"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroAlma;