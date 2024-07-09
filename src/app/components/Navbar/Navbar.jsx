"use client";
import React, { useEffect, useState } from "react";
import { HiPuzzlePiece } from "react-icons/hi2";
import { TfiMenu } from "react-icons/tfi";
import { AiOutlineClose } from "react-icons/ai";

import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const Links = [
    { name: "Inicio", link: "/" },
    { name: "Nosotros", link: "/" },
    { name: "Acerca de", link: "/" },
    { name: "Blog", link: "/" },
    { name: "Contacto", link: "/" },
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
        className="relative bg-cover h-36 lg:bg-no-repeat lg:h-screen "
        style={{
          backgroundImage:
            "url(https://firebasestorage.googleapis.com/v0/b/caci-alma.appspot.com/o/heroBGpuzzle.png?alt=media&token=ab8a0966-de86-4510-9ae7-c96b837c991b)",
        }}
      >
        <div className="relative flex items-center justify-center mx-auto  px-4 py-32 sm:px-6 lg:px-8 h-[65%]">
          <div
            // className={`relative w-[8rem] h-[8rem] md:w-96 md:h-96 lg:w-[23rem] lg:h-[23rem] ${
            //   isScrolled
            //     ? "lg:w-[11.5rem] lg:h-[11.5rem]"
            //     : "lg:w-[23rem] lg:h-[23rem]"
            // } flex items-top justify-center`}
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
            className="text-[3.5rem] absolute right-2 top-12 flex items-center cursor-pointer md:hidden menuPuzzle swing"
          >
            <HiPuzzlePiece className="text-[#fb6909] " />

            <span className=" text-white absolute text-[.9rem] ml-[1.4rem] mt-[.6]">
              {!open ? (
                <TfiMenu />
              ) : (
                <AiOutlineClose className="mt-[.2rem] text-[1.1rem] ml-[-.13rem]" />
              )}
            </span>

          
          </div>
          <div className="bg-[#2727d9] lg:h-[155px] lg:top-[24rem] md:h-[120px] md:top-[18rem] top-[8rem] absolute w-full">
            <div className=" lg:text-center ">
              <h1 className=" text-white text-center lg:text-5xl font-bold text-xl  lg:py-[1.30rem] py-3">
                Centro de Atención Familiar A.C.
              </h1>
              <ul
              

                className={`z-1 md:flex md:items-center md:pb-0 pb-8 absolute md:static bg-[#2727d9]  md:z-auto  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in  lg:w-full   ${
                  open ? "top-[3rem]" : "left-[-490px]"
                }`}
              >
                {Links.map((link) => (
                  <li
                    key={link.name}
                    className="lg:mx-auto md:mx-auto  text-xl md:my-0 my-7 "
                  >
                    <a
                      href={link.link}
                      className="lg:rounded-md lg:relative lg:flex lg:h-[50px] lg:w-40 lg:items-center justify-left lg:justify-center lg:overflow-hidden  text-white  lg:transition-all lg:before:absolute lg:before:h-0 lg:before:w-0 lg:before:rounded-full lg:before:bg-white lg:before:duration-500 lg:before:ease-out lg:hover:text-[#2727d9] lg:hover:text-end lg:hover:ml-0 lg:hover:font-bold  hover:before:h-56 lg:hover:before:w-56 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] lg:after:h-[0px] lg:after:bg-white after:bg-[#f96f0d] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                    >


                      <span className="relative z-10"> {link.name}</span>
                    </a>
                  
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

  {/* <ion-icon name={open ? "close" : "menu"}></ion-icon> */}
  // className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#2727d9]  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in lg:z-1 lg:w-full  ${
                //   open ? "top-[12rem]" : "top-[-490px]"
                // }`}

  {/* <a
                      href={link.link}
                      className="text-white hover:text-[#fbcb09] font-semibold relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-green-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    >
                      {link.name}
                    </a> */}