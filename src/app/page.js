import AboutHome from "./components/Home/AboutHome";
import HeroAlma from "./components/Hero/HeroAlma";
import Nav from "./components/Navbar/Nav";
import ImageWithDescription from "./components/Home/ValuesHome";

import Fake2 from "./components/Fake2";
import SimpleMap from "./components/SimpleMap";

export default function Home() {
  return (
    <>
      <div className="">
        <Nav />
        <section className="pt-[210px] md:pt-[478px] lg:pt-[400px] z-10">
          <HeroAlma />
        </section>
        <section className="pt-[50px] z-10">
          <AboutHome />
        </section>
        <section className=" z-10">
          <ImageWithDescription />
        </section>
        <section className="pt-[20px]">
          <h3  className=" text-[#2727d9] text-2xl font-bold lg:text-4xl py-4 text-center">Damos sercicios en : </h3>
          <SimpleMap />
        </section>

        <Fake2 />
      </div>
    </>
  );
}
