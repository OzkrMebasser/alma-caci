"use client";
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Button = ({ href}) => {
  const { t } = useTranslation();
  return (
    <div className="relative inline-block">
      <button className="group relative w-48 h-12 p-0 bg-transparent border-none cursor-pointer outline-none font-inherit text-inherit">
        {/* Circle with arrow */}
        <span className="circle relative block w-12 h-12 bg-[#2727d9] rounded-full transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:w-full">
          <span className="icon-arrow absolute top-1/2 left-2.5 w-[1.125rem] h-[0.125rem] bg-transparent -translate-y-1/2">
            <span className="absolute top-[-0.29rem] right-[0.0625rem] w-[0.625rem] h-[0.625rem] rotate-45 border-t-2 border-r-2 border-white content-['']" />
          </span>
        </span>

        {/* Button text */}
        <Link 
        href={href}
        className="button-text absolute inset-0 ml-[2rem] flex items-center justify-center text-[#2727d9] font-bold uppercase leading-[1.6] transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:text-white">
          {/* Saber más... */}
         <span className=''> {t("home.learnMore")}</span>
        </Link>
      </button>
    </div>
  );
};

export default Button;
