"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import NavbarSub from "./NavbarSub";

const Nav = () => {
  const [showMainNav, setShowMainNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowMainNav(false);
      } else {
        setShowMainNav(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full z-50">
      {showMainNav ? <Navbar /> : <NavbarSub />}
    </div>
  );
};

export default Nav;
