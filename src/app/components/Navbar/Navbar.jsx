"use client";
import React, { useEffect, useState } from "react";
import { HiPuzzlePiece } from "react-icons/hi2";
import { IoGlobeSharp } from "react-icons/io5";
import { TfiMenu } from "react-icons/tfi";
import { AiOutlineClose } from "react-icons/ai";
import { useTranslation } from "react-i18next";

// Puedes usar react-world-flags para las banderas
import Flag from "react-world-flags";

import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLanguageOpen(false);
  };

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/services", label: t("nav.services") },
    { href: "/contact", label: t("nav.contact") },
    { href: "/blog", label: t("nav.blog") },
  ];

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

  const pieceCount = 4;
  const pieces = Array.from({ length: pieceCount });

  return (
    <header
      className="relative bg-cover h-36 pt-8 lg:bg-no-repeat lg:h-screen z-50 "
      style={{
        backgroundImage:
          "url(https://firebasestorage.googleapis.com/v0/b/caci-alma.appspot.com/o/heroBGpuzzle.png?alt=media&token=ab8a0966-de86-4510-9ae7-c96b837c991b)",
      }}
    >
      <div className="relative flex items-center justify-center mx-auto px-4 py-[150px] sm:px-6 lg:px-8 h-[75%] ">
        <div
          className={`absolute top-0 w-[8rem] h-[8rem] md:w-[17rem] md:h-[17rem] lg:w-[23rem] lg:h-[23rem]  justify-center`}
        >
          {pieces.map((_, index) => (
            <div
              key={index}
              className={`piece piece${
                index + 1
              } absolute w-full h-full bg-no-repeat bg-center`}
              style={{
                backgroundImage:
                  "url(https://firebasestorage.googleapis.com/v0/b/caci-alma.appspot.com/o/ALMAlogotransparent.png?alt=media&token=1e14c45a-252e-47bf-9345-372fa7e759e5)",
              }}
            ></div>
          ))}
        </div>
      </div>

      <nav>
        <div
          onClick={() => setOpen(!open)}
          className="text-[3.5rem] absolute right-2 top-12 flex items-center cursor-pointer md:hidden menuPuzzle swing "
        >
          <HiPuzzlePiece className="text-[#fb6909]" />
          <span className="text-white absolute text-[.9rem] ml-[1.4rem] mt-[.6]">
            {!open ? (
              <TfiMenu />
            ) : (
              <AiOutlineClose className="mt-[.2rem] text-[1.1rem] ml-[-.13rem]" />
            )}
          </span>
        </div>

        <div className="bg-[#2727d9] lg:h-[155px] lg:top-[27.5rem] md:h-[120px] md:top-[18rem] top-[12rem] absolute w-full">
          <div className="lg:text-center">
            <h1 className="text-white text-center lg:text-5xl font-bold text-xl lg:py-[1.30rem] py-3">
              Centro de Atención Familiar A.C.
            </h1>
            <ul
              className={`z-1 md:flex md:items-center md:pb-0 pb-0 absolute md:static bg-[#2727d9] md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in lg:w-full lg:flex lg:justify-between ${
                open ? "top-[3rem] z-50" : "left-[-490px]"
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 w-full">
                {navLinks.map((link) => (
                  <li
                    key={link.label}
                    className="lg:mx-auto md:mx-auto text-xl md:my-0 my-7"
                  >
                    <a
                      href={link.href}
                      className="lg:rounded-md lg:relative lg:flex lg:h-[50px] lg:w-40 lg:items-center justify-left lg:justify-center lg:overflow-hidden text-white lg:transition-all lg:before:absolute lg:before:h-0 lg:before:w-0 lg:before:rounded-full lg:before:bg-white lg:before:duration-500 lg:before:ease-out lg:hover:text-[#2727d9] lg:hover:text-end lg:hover:ml-0 lg:hover:font-bold hover:before:h-56 lg:hover:before:w-56 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] lg:after:h-[0px] lg:after:bg-white after:bg-[#ffffff] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                    >
                      <span className="relative z-10"> {link.label}</span>
                    </a>
                  </li>
                ))}

                {/* Language Selector with Flags */}
                <li className="lg:mx-auto md:mx-auto text-xl md:my-0 my-7">
                  <div
                    onClick={() =>
                      toggleLanguage(i18n.language === "es" ? "en" : "es")
                    }
                    className="lg:rounded-md lg:relative lg:flex lg:h-[50px] lg:w-40 lg:items-center justify-left lg:justify-center lg:overflow-hidden text-white lg:transition-all lg:before:absolute lg:before:h-0 lg:before:w-0 lg:before:rounded-full lg:before:bg-white lg:before:duration-500 lg:before:ease-out lg:hover:text-[#2727d9] lg:hover:text-end lg:hover:ml-0 lg:hover:font-bold hover:before:h-56 lg:hover:before:w-56 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] lg:after:h-[0px] lg:after:bg-white after:bg-[#ffffff] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Flag
                        code={i18n.language === "es" ? "MX" : "US"}
                        style={{ width: "25px", height: "20px" }}
                      />{" "}
                      {i18n.language === "es" ? "Español" : "English"}
                    </span>
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
