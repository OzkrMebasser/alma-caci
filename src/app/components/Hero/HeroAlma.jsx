import React from "react";
import PuzzleAlma from "./PuzzleAlma";
import Acrostic from "./Acrostic";

const HeroAlma = () => {
  return (
 <>
    <div className="flex flex-col lg:flex-row gap-2">
      <div className=" text-white p-4 flex-1"><PuzzleAlma /></div>
      <div className="  p-4 flex-1"><Acrostic /> </div>
    </div>
     <div className="flex flex-col lg:flex-row gap-2">
     <div className=" text-white p-4 flex-1"><PuzzleAlma /></div>
     <div className="  p-4 flex-1"><Acrostic /> </div>
   </div>
    <div className="flex flex-col lg:flex-row gap-2">
    <div className=" text-white p-4 flex-1"><PuzzleAlma /></div>
    <div className="  p-4 flex-1"><Acrostic /> </div>
  </div>
 </>
  );
};

export default HeroAlma;
