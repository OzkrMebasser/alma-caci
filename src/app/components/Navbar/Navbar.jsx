"use client";
import React, { useEffect, useState } from "react";
import { HiPuzzlePiece } from "react-icons/hi2";
import { TfiMenu } from "react-icons/tfi";
import { AiOutlineClose } from "react-icons/ai";





import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  let Links = [
    { name: "INICIO", link: "/" },
    { name: "NOSOTROS", link: "/" },
    { name: "ACERCA DE", link: "/" },
    { name: "BLOG", link: "/" },
    { name: "CONTACTO", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const pieces = document.querySelectorAll(".piece");
    pieces.forEach((piece) => {
      piece.style.transitionDelay = `${Math.random() * 300}ms`;
      piece.style.transform = `rotateZ(${Math.random() * 60}deg) translateX(${
        Math.random() * -300
      }px) translateY(${Math.random() * 2000 - 100}px) scale(0)`;
    });

    setTimeout(() => {
      pieces.forEach((piece) => {
        piece.style.transform = "";
        piece.style.transition = "transform 2000ms ease-in";
      });
    }, 500);
  }, []);

  const pieceCount = 25;
  const pieces = Array.from({ length: pieceCount });

  return (
    <>
      <header
        className="relative bg-cover h-36 lg:bg-no-repeat lg:h-screen"
        style={{
          backgroundImage:
            "url(https://firebasestorage.googleapis.com/v0/b/caci-alma.appspot.com/o/heroBGpuzzle.png?alt=media&token=ab8a0966-de86-4510-9ae7-c96b837c991b)",
        }}
      >
        <div className="relative flex items-center justify-center mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:px-8 h-full">
          <div
            className={`relative bottom-12 lg:bottom-[8rem] w-[8rem] h-[8rem] md:w-96 md:h-96 lg:w-[23rem] lg:h-[23rem] ${
              isScrolled ? "lg:w-[11.5rem] lg:h-[11.5rem]" : "lg:w-[23rem] lg:h-[23rem]"
            } flex items-top justify-center`}
          >
            {pieces.map((_, index) => (
              <div
                key={index}
                className={`piece piece${index + 1} absolute w-full h-full bg-no-repeat bg-center`}
                style={{
                  backgroundImage:
                    "url(https://firebasestorage.googleapis.com/v0/b/caci-alma.appspot.com/o/ALMAlogotransparent.png?alt=media&token=1e14c45a-252e-47bf-9345-372fa7e759e5)",
                }}
              ></div>
            ))}
          </div>
        </div>
      </header>
      <nav>
        <div
          onClick={() => setOpen(!open)}
          className="text-[3.5rem] absolute right-8 top-12 flex items-center cursor-pointer md:hidden menuPuzzle swing"
        >
          <HiPuzzlePiece className="text-orange-600 " />
          
          <span className=" text-white absolute text-[.9rem] ml-[1.4rem] mt-[.6]">{!open ? <TfiMenu /> : <AiOutlineClose className="mt-[.2rem] text-[1.1rem] ml-[-.13rem]" />}</span>

          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-blue-700 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20" : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  href={link.link}
                  className="text-white hover:text-gray-400 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
