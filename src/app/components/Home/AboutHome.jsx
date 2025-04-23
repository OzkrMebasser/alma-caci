"use client";
import React from "react";
import { getAlmaDefinitions } from "../../../../api/data.js";
import LearnMoreButton from "../UI/LearnMoreButton";
import { useTranslation } from "react-i18next";

const almaDefinitions = getAlmaDefinitions();

const imgAosProps = {
  "data-aos": window.innerWidth > 768 ? "fade-up" : "flip-left",
  "data-aos-duration": window.innerWidth > 768 ? "3000" : "5000",
  "data-aos-offset": "300",
  "data-aos-easing": "ease-in-sine",
};

const AboutHome = () => {
  const { t } = useTranslation();
  return (
    <div
      style={{
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/caci-alma.appspot.com/o/CACI-ALMA-bg-half-small.png?alt=media&token=ef55265d-d87e-4356-975a-320e4e92578d')`,
      }}
      className="bg-no-repeat bg-cover bg-center bg-transparent relative flex flex-col items-center mx-auto min-h-[400px] lg:min-h-[500px] lg:flex-row-reverse lg:w-full mt-12 lg:mb-0 mb-8 px-0 lg:px-12"
    >
      {/* Image Column */}
      <div className="w-full h-64 lg:w-1/2 lg:h-auto" {...imgAosProps}>
        <img
          className="h-full w-full object-cover"
          src="https://firebasestorage.googleapis.com/v0/b/caci-alma.appspot.com/o/ALMA-home-section.jpeg?alt=media&token=178e9018-f861-44f5-ae16-8e7dbfce5ffa"
          alt="Pareja abrazandose home section"
        />
      </div>
      {/* Close Image Column */}

      {/* Text Column */}
      <div className="max-w-lg bg-[#ffffff54] md:bg-white lg:bg-white md:max-w-3xl  md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-[13rem] lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
        {/* Text Wrapper */}
        <div
          className="flex flex-col p-8 md:px-16 "
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h2 className=" text-[#2727d9] text-2xl font-bold lg:text-4xl">
            {almaDefinitions.map((item, index) => (
              <span key={index} className={`${item.colorClass} font-extrabold`}>
                {item.letter}
              </span>
            ))}

            <span className="ml-2">
              {/* con Propósito */}
              {t("home.purpose")}
            </span>
          </h2>
          <p className="mt-4 text-gray-800 text-base lg:text-lg text-justify">
            <span className="mr-1"> {t("home.speakingOf")}</span>
            {/* Hablar de */}{" "}
            <strong>
              {almaDefinitions.map((item, index) => (
                <span key={index} className={`${item.colorClass}`}>
                  {item.letter}
                </span>
              ))}
              <span className="text-[#2727d9]">, A.C.</span>
            </strong>{" "}
            {/* es hablar de... */}
            {t("home.speakingOfALMA")}
          </p>
          {/* Button Container */}
          <div className="mt-8">
            <LearnMoreButton href="/about" />
          </div>
        </div>
        {/* Close Text Wrapper */}
      </div>
      {/* Close Text Column */}
    </div>
  );
};

export default AboutHome;
