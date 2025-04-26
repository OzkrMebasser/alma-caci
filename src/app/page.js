import AboutHome from "./components/Home/AboutHome";
import HeroAlma from "./components/Hero/HeroAlma";
import Nav from "./components/Navbar/Nav";
import ImageWithDescription from "./components/Home/ValuesHome";

import Fake2 from "./components/Fake2";

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
        <Fake2 />
      </div>
    </>
  );
}
