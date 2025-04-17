"use client";

import { useEffect, useState } from "react";

const frases = ["Confía en ti", "Cree en tu camino", "Actúa con propósito", "Ama sin medida"];

const Acrostic = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % frases.length);
    }, 6500); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[250px] lg:w-[520px] lg:h-[420px]  text-center items-center justify-center text-3xl lg:text-5xl font-bold transition-opacity duration-700 ease-in-out bg-red-600">
     <p>
     {frases[index]}
     </p>
    </div>
  );
};

export default Acrostic;
