"use client";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ValuesHome = () => {
  const colorClassMap = {
    amor: "text-orange-500",
    libertad: "text-red-600",
    misericordia: "text-yellow-400",
    alegria: "text-green-600",
  };

  const valuesALMA = [
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/caci-alma.appspot.com/o/amor-al-projimo-1.webp?alt=media&token=2eb6a70d-f274-4f6a-a356-56221632d96d",
      title: "Amor al Prójimo",
      description:
        "Impulsados por la empatía hacia los demás, abrazamos la compasión y ofrecemos apoyo incondicional a todos aquellos que buscan nuestra ayuda.",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/caci-alma.appspot.com/o/respeto-tolerancia.jpg?alt=media&token=1eed8d21-d274-4a48-a1b1-24621360137c",
      title: "Respeto y Tolerancia",
      description:
        "Apreciamos y celebramos la diversidad de pensamientos, creencias y culturas. Respetamos a cada individuo como un ser único, sin importar su trasfondo.",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/caci-alma.appspot.com/o/integridad.jpg?alt=media&token=91a8cfbd-9be8-4a22-aa05-e91a71782f21",
      title: "Integridad",
      description:
        "Actuamos con honestidad y ética en todo lo que hacemos, manteniendo la confianza de aquellos a quienes servimos y de nuestra comunidad.",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/caci-alma.appspot.com/o/empatia-3.jpg?alt=media&token=946ee286-f402-4042-a068-ea98d4a3b524",
      title: "Empatía",
      description:
        "Nos esforzamos por comprender las necesidades y desafíos de quienes recurren a nosotros, siendo sensibles a sus experiencias.",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/caci-alma.appspot.com/o/excelencia-2.jpg?alt=media&token=071ad6fb-6e71-467a-906b-9c80385fda1e",
      title: "Excelencia",
      description:
        "Buscamos la excelencia en la prestación de nuestros servicios, trabajando con pasión y compromiso para lograr un impacto positivo duradero en la sociedad.",
    },
    {
        image: "https://firebasestorage.googleapis.com/v0/b/caci-alma.appspot.com/o/reconciliacion-2.png?alt=media&token=23e4c451-93b9-4fc5-9c58-db1c57d1b278",
        title: "Reconciliación",
        description:
          "Impulsamos el restablecimiento de los vínculos tanto en la familias como con otros individuos, logrando una mejora en la salud mental.",
      }
      
  ];

  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const scrollBySlide = (direction) => {
    const width = sliderRef.current.offsetWidth;
    sliderRef.current.scrollBy({ left: direction * width, behavior: "smooth" });
  };

  return (
    <div
      data-aos="fade-right"
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/caci-alma.appspot.com/o/CACI-ALMA-bg-half-small.png?alt=media&token=ef55265d-d87e-4356-975a-320e4e92578d')`,
      }}
    >
      {/* Flecha izquierda */}
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-[#ffffff] p-2 rounded-full shadow-xl border-[.5px] border-[#2727d92f] z-10 text-[#2727d9]"
        onClick={() => scrollBySlide(-1)}
      >
        <FaChevronLeft size={20} />
      </button>

      {/* Flecha derecha */}
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#ffffff] p-2 rounded-full shadow-xl border-[.5px] border-[#2727d92f] z-10 text-[#2727d9]"
        onClick={() => scrollBySlide(1)}
      >
        <FaChevronRight size={20} />
      </button>

      {/* Slider */}
      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing py-8"
      >
        {valuesALMA.map((value, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full snap-center flex flex-col md:flex-row md:items-center py-6 lg:px-12 md:p-12"
          >
            <img
              src={value.image}
              alt={value.title}
              className="w-full md:w-1/2 h-[13rem] md:h-96 object-cover  shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]"
            />

            <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center h-full px-10 lg:px-16 py-12 lg:py-10 ">
              <h2 className=" text-[#2727d9] text-2xl font-bold lg:text-4xl">
                {value.title}
              </h2>
              <p className="mt-4 text-gray-800 text-base lg:text-lg text-justify">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValuesHome;
