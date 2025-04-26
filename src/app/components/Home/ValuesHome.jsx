"use client";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ValuesHome = () => {
  const valuesALMA = [
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/caci-alma.appspot.com/o/amor-al-projimo-1.webp?alt=media&token=2eb6a70d-f274-4f6a-a356-56221632d96d",
        title: "Título de la sección",
        description:
        "Aquí va la descripción del contenido. Puedes escribir todo lo que necesites para explicar lo que representa la imagen, los beneficios, historia o lo que quieras compartir.",
    
    },
    {
        image:
          "https://firebasestorage.googleapis.com/v0/b/caci-alma.appspot.com/o/amor-al-projimo-1.webp?alt=media&token=2eb6a70d-f274-4f6a-a356-56221632d96d",
          title: "Título de la sección",
          description:
          "Aquí va la descripción del contenido. Puedes escribir todo lo que necesites para explicar lo que representa la imagen, los beneficios, historia o lo que quieras compartir.",
      
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/caci-alma.appspot.com/o/amor-al-projimo-1.webp?alt=media&token=2eb6a70d-f274-4f6a-a356-56221632d96d",
          title: "Título de la sección",
          description:
          "Aquí va la descripción del contenido. Puedes escribir todo lo que necesites para explicar lo que representa la imagen, los beneficios, historia o lo que quieras compartir.",
      
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/caci-alma.appspot.com/o/amor-al-projimo-1.webp?alt=media&token=2eb6a70d-f274-4f6a-a356-56221632d96d",
          title: "Título de la sección",
          description:
          "Aquí va la descripción del contenido. Puedes escribir todo lo que necesites para explicar lo que representa la imagen, los beneficios, historia o lo que quieras compartir.",
      
      },
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
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10"
        onClick={() => scrollBySlide(-1)}
      >
        <FaChevronLeft size={20} />
      </button>

      {/* Flecha derecha */}
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10"
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
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing"
      >
        {valuesALMA.map((value, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full snap-center flex flex-col md:flex-row md:items-center py-6 lg:px-12 md:p-12"
          >
            <img
              src={value.image}
              alt="Descripción"
              className="w-full md:w-1/2 shadow-md"
            />
            <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center h-full bg-[white] px-16 py-10">
              <h2 className="text-2xl font-bold mb-4">{value.title}</h2>
              <p className="text-gray-700">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValuesHome;
