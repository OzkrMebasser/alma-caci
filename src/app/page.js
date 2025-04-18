"use client";

import AboutHome from "./components/AboutHome";
import HeroAlma from "./components/Hero/HeroAlma";
import Nav from "./components/Navbar/Nav";

export default function Home() {
  return (
    <>
      <div className="">
        <Nav />
        <div className="pt-[180px] lg:pt-[400px]">
          <HeroAlma />
        </div>
        <AboutHome />
      </div>
    </>
  );
}
