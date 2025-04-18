"use client";

import { useState, useEffect } from "react";


const almaDefinitions = [
  {
    letter: "A",
    color: "#FF7711", // naranja
    title: "Amor",
    definition: "por ti mismo y por el prójimo.",
  },
  {
    letter: "L",
    color: "#FF0000", // rojo
    title: "Libertad",
    definition: "emocional, espiritual.",
  },
  {
    letter: "M",
    color: "#FFCC00", // amarillo
    title: "Misericordia",
    definition: "por la gente que te rodea.",
  },
  {
    letter: "A",
    color: "#009900", // verde
    title: "Alegría",
    definition: "por conquistar tus miedos para tener éxito.",
  },
];

const PuzzleAlmaWithText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Efecto para cambiar el índice cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === almaDefinitions.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);

  const currentDefinition = almaDefinitions[currentIndex];

  return (
    <>
      <section className="relative w-full flex flex-col lg:flex-row items-center justify-between px-4 py-8">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center">
          <div className="relative bg-blue-300 w-[200px] h-[200px] lg:w-[450px] lg:h-[450px] mx-auto p-0 lg:p-4 top-10 lg:top-0 lg:scale-100">
            {/* puzzle-left */}
            <div className="absolute top-0 left-0 h-1/4 w-1/4 bg-orange-500 border-[3px] border-orange-500 rounded-[10%] animate-move-left animation-delay-0 z-[1] text-white flex items-center justify-center">
              <span className="text-white font-bold text-5xl">A</span>
              <div className="absolute top-1/2 -right-[29%] h-[30%] w-[30%] border-2 border-l-transparent bg-orange-500 rounded-full -translate-y-1/2"></div>
              <div className="absolute left-1/2 -bottom-[29%] h-[30%] w-[30%] border-2 border-t-transparent bg-orange-500 rounded-full -translate-x-1/2"></div>
            </div>

            {/* puzzle-right */}
            <div className="absolute top-0 right-0 h-1/4 w-1/4 bg-red-600 border-[3px] border-red-600 rounded-[10%] animate-move-right animation-delay-500 text-white flex items-center justify-center">
              <span className="text-white font-bold text-5xl">L</span>
              <div className="absolute -top-[29%] left-1/2 h-[30%] w-[30%] border-2 border-b-transparent bg-red-600 rounded-full -translate-x-1/2"></div>
              <div className="absolute top-1/2 -right-[7%] h-[30%] w-[30%] border-2 border-r-transparent bg-white rounded-full -translate-y-1/2"></div>
              <div className="absolute left-1/2 -bottom-[29%] h-[30%] w-[30%] border-2 border-t-transparent bg-red-600 rounded-full -translate-x-1/2"></div>
              <div className="absolute top-1/2 -left-[8%] h-[30%] w-[30%] border-2 border-l-transparent bg-white rounded-full -translate-y-1/2"></div>
            </div>

            {/* puzzle-left-lower */}
            <div className="absolute bottom-0 left-0 h-1/4 w-1/4 bg-yellow-400 border-2 rounded-[10%] animate-move-left-up animation-delay-1000 text-white flex items-center justify-center">
              <span className="text-white font-bold text-5xl">M</span>
              <div className="absolute -top-[8%] left-1/2 h-[30%] w-[30%] border-2 border-t-transparent bg-white rounded-full -translate-x-1/2"></div>
              <div className="absolute top-1/2 -right-[29%] h-[30%] w-[30%] border-2 border-l-transparent bg-yellow-400 rounded-full -translate-y-1/2"></div>
              <div className="absolute left-1/2 -bottom-[8%] h-[30%] w-[30%] border-2 border-b-transparent bg-white rounded-full -translate-x-1/2"></div>
              <div className="absolute top-1/2 -left-[8%] h-[30%] w-[30%] border-2 border-l-transparent bg-white rounded-full -translate-y-1/2"></div>
            </div>

            {/* puzzle-right-lower */}
            <div className="absolute bottom-0 right-0 h-1/4 w-1/4 bg-green-600 border-2 rounded-[10%] animate-move-right-up animation-delay-1500 z-[-1] text-white flex items-center justify-center">
              <span className="text-white font-bold text-5xl">A</span>
              <div className="absolute -top-[8%] left-1/2 h-[30%] w-[30%] border-2 border-t-transparent bg-white rounded-full -translate-x-1/2"></div>
              <div className="absolute top-1/2 -right-[29%] h-[30%] w-[30%] border-2 border-l-transparent bg-green-600 rounded-full -translate-y-1/2"></div>
              <div className="absolute left-1/2 -bottom-[8%] h-[30%] w-[30%] border-2 border-b-transparent bg-white rounded-full -translate-x-1/2"></div>
              <div className="absolute top-1/2 -left-[8%] h-[30%] w-[30%] border-2 border-l-transparent bg-white rounded-full -translate-y-1/2"></div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <img
            className="w-full h-[450px] object-cover rounded-lg"
            src="https://firebasestorage.googleapis.com/v0/b/caci-alma.appspot.com/o/familia-ALMA-CACI-HERO.jpg?alt=media&token=f323da11-af59-4921-bda0-621e127efc5b"
            alt="Imagen ALMA"
          />
        </div>
      </section>

      {/* Contenido del array */}
      <div className="flex flex-col items-center justify-center mt-8">
        <div style={{ color: currentDefinition.color }}>
          <h3 className="text-2xl font-bold">
            <strong>{currentDefinition.title}</strong>
          </h3>
          <p className="text-lg">{currentDefinition.definition}</p>
        </div>
      </div>
    </>
  );
};

export default PuzzleAlmaWithText;