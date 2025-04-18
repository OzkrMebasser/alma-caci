"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import Flag from "react-world-flags";

const NavbarSub = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
  };

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/services", label: t("nav.services") },
    { href: "/contact", label: t("nav.contact") },
    { href: "/blog", label: t("nav.blog") },
  ];

  return (
    <nav className="bg-[#2727d9] text-white py-4 px-2 sticky top-0 z-40">
      <div className=" mx-auto  lg:px-4 flex justify-between items-center">
        <div className="text-[1rem] lg:text-xl font-bold text-white">
          <img
            className="inline h-[45px] w-[45px] lg:h-[45px] lg:w-[45px] mr-[1px] rounded-full "
            src="https://firebasestorage.googleapis.com/v0/b/caci-alma.appspot.com/o/caci-alma-logoNOblue.png?alt=media&token=fb149cdc-c137-48ce-ab8e-cfee95ddbed7"
          />{" "}
          <Link href="/">Centro de Atención Familiar A.C.</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              className="bg-[#2727d9] lg:rounded-md lg:relative lg:flex lg:h-[35px] lg:p-2 lg:items-center justify-left lg:justify-center lg:overflow-hidden text-white lg:transition-all lg:before:absolute lg:before:h-0 lg:before:w-0 lg:before:rounded-full lg:before:bg-white lg:before:duration-500 lg:before:ease-out lg:hover:text-[#2727d9] lg:hover:text-end lg:hover:ml-0 lg:hover:font-bold hover:before:h-56 lg:hover:before:w-56 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] lg:after:h-[0px] lg:after:bg-white after:bg-[#ffffff] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              key={link.href}
              href={link.href}
            >
              <span className="relative z-10">{link.label}</span>
            </Link>
          ))}

          {/* Language Selector with Flag */}
          <button
            onClick={toggleLanguage}
            className="items-center gap-2 lg:rounded-md lg:relative lg:flex lg:h-[35px] lg:p-2 lg:items-center justify-left lg:justify-center lg:overflow-hidden text-white lg:transition-all lg:before:absolute lg:before:h-0 lg:before:w-0 lg:before:rounded-full lg:before:bg-white lg:before:duration-500 lg:before:ease-out lg:hover:text-[#2727d9] lg:hover:text-end lg:hover:ml-0 lg:hover:font-bold hover:before:h-56 lg:hover:before:w-56 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] lg:after:h-[0px] lg:after:bg-white after:bg-[#ffffff] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Flag
                code={i18n.language === "es" ? "MX" : "US"}
                style={{ width: "25px", height: "18px" }}
              />
              {i18n.language === "es" ? "Español" : "English"}
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="space-y-4 p-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <div onClick={toggleMenu} className="hover:text-gray-300">
                {link.label}
              </div>
            </Link>
          ))}

          {/* Language Selector for Mobile */}
          <button
            onClick={() => {
              toggleLanguage();
              toggleMenu();
            }}
            className="flex items-center gap-2 hover:text-gray-300"
          >
            <Flag
              code={i18n.language === "es" ? "MX" : "US"}
              style={{ width: "25px", height: "18px" }}
            />
            {i18n.language === "es" ? "Español" : "English"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSub;
