"use client";

import "./puzzleAlma.css";

const PuzzleAlma = () => {
  return (
    <div className="relative w-[250px] h-[250px] lg:w-[420px] lg:h-[420px] mx-auto p-2 lg:p-4  top-10 lg:top-0 lg:scale-100">
      {/* puzzle-left */}
      <div className="absolute top-0 left-0 h-1/4 w-1/4 bg-orange-500 border-[3px] border-orange-500 rounded-[10%] animate-move-left animation-delay-0 z-[1] text-white flex items-center justify-center">
        <span className="text-white font-bold text-5xl">A</span>
        <div className="absolute top-1/2 -right-[29%] h-[30%] w-[30%] border-2 border-l-transparent bg-orange-500 rounded-full -translate-y-1/2"></div>
        <div className="absolute left-1/2 -bottom-[29%] h-[30%] w-[30%] border-2 border-t-transparent bg-orange-500 rounded-full -translate-x-1/2"></div>
      </div>

      {/* puzzle-right */}
      <div className="absolute top-0 right-0 h-1/4 w-1/4 bg-red-600 border-[3px] border-red-600 rounded-[10%] animate-move-right animation-delay-500 text-white flex items-center justify-center">
        <span className="text-white font-bold text-5xl">L</span>
        <div className="absolute -top-[29%] left-1/2 h-[30%] w-[30%] border-2 border-b-transparent bg-red-600 rounded-full -translate-x-1/2"></div>
        <div className="absolute top-1/2 -right-[7%] h-[30%] w-[30%] border-2 border-r-transparent bg-white rounded-full -translate-y-1/2"></div>
        <div className="absolute left-1/2 -bottom-[29%] h-[30%] w-[30%] border-2 border-t-transparent bg-red-600 rounded-full -translate-x-1/2"></div>
        <div className="absolute top-1/2 -left-[8%] h-[30%] w-[30%] border-2 border-l-transparent bg-white rounded-full -translate-y-1/2"></div>
      </div>

      {/* puzzle-left-lower */}
      <div className="absolute bottom-0 left-0 h-1/4 w-1/4 bg-yellow-400 border-2 rounded-[10%] animate-move-left-up animation-delay-1000 text-white flex items-center justify-center">
        <span className="text-white font-bold text-5xl">M</span>
        <div className="absolute -top-[8%] left-1/2 h-[30%] w-[30%] border-2 border-t-transparent bg-white rounded-full -translate-x-1/2"></div>
        <div className="absolute top-1/2 -right-[29%] h-[30%] w-[30%] border-2 border-l-transparent bg-yellow-400 rounded-full -translate-y-1/2"></div>
        <div className="absolute left-1/2 -bottom-[8%] h-[30%] w-[30%] border-2 border-b-transparent bg-white rounded-full -translate-x-1/2"></div>
        <div className="absolute top-1/2 -left-[8%] h-[30%] w-[30%] border-2 border-l-transparent bg-white rounded-full -translate-y-1/2"></div>
      </div>

      {/* puzzle-right-lower */}
      <div className="absolute bottom-0 right-0 h-1/4 w-1/4 bg-green-600 border-2 rounded-[10%] animate-move-right-up animation-delay-1500 z-[-1] text-white flex items-center justify-center">
        <span className="text-white font-bold text-5xl">A</span>
        <div className="absolute -top-[8%] left-1/2 h-[30%] w-[30%] border-2 border-t-transparent bg-white rounded-full -translate-x-1/2"></div>
        <div className="absolute top-1/2 -right-[29%] h-[30%] w-[30%] border-2 border-l-transparent bg-green-600 rounded-full -translate-y-1/2"></div>
        <div className="absolute left-1/2 -bottom-[8%] h-[30%] w-[30%] border-2 border-b-transparent bg-white rounded-full -translate-x-1/2"></div>
        <div className="absolute top-1/2 -left-[8%] h-[30%] w-[30%] border-2 border-l-transparent bg-white rounded-full -translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default PuzzleAlma;
