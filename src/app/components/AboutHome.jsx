"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";


const AboutHome = () => {
  const router = useRouter();

  return (
    <>
      <section className="">
        
        <div className="py-[40px] md:py-[80px] lg:pt-[80px] lg:pb-[100px] container mx-auto px-[20px] lg:px-6">
          <div
            className="section-title-group justify-start"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h2 className="uppercase font-black text-teal-400 text-2xl mb-6 ">
              About us
            </h2>
          </div>

          <p
            className="md:text-body-md mb-6 font-semibold text-lg text-justify"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            We are a vibrant and expanding church community that steadfastly
            believes in the ongoing manifestation of divine miracles and wonders
            in the lives of those who earnestly seek the divine presence. Our
            congregation is dedicated to fostering an environment of faith and
            hope, where individuals are encouraged to cultivate a deeper
            relationship with God. We invite you to join us and experience the
            transformative power of faith and spiritual enrichment.
          </p>

          <button
            className="border-[1.5px] border-[white] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mt-6 bg-teal-400 text-teal-900 font-bold rounded-lg px-4 py-2 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            data-aos="fade-down-right"
            data-aos-delay="700"
            // onClick={() => router.push(`about`)}
          >
            <Link href="/about-us"> Learn More </Link>
            {/* <IoIosArrowDroprightCircle className="text-2xl inline ml-2 align-middle" /> */}
          </button>
        </div>
      </section>
    </>
  );
};

export default AboutHome;