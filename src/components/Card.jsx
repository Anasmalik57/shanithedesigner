import React from "react";
import leftImage from "../assets/left-card.png";
import rightImage from "../assets/right-card.png";

const Card = () => {
  return (
    <div id="container" className="w-full h-[45%] flex justify-center items-start gap-12 mt-4 ">
      {/* card1 */}
      <div className="flex gap-2  cursor-pointer bg-opacity-[0.01] backdrop-blur-md rounded-2xl w-[28%]  h-[88%] shadow-lg shadow-slate-800  hover:shadow-slate-900  justify-center items-center transition-all duration-500 ease-in-out ">
        <div className="w-48 h-[20rem] mr-2  rounded-2xl overflow-hidden shadow-xl shadow-slate-900 -translate-x-6  hover:translate-x-2 transition-all duration-1000 ease-in-out">
          <img src={leftImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className=" max-h-60 p-4 tracking-widest ">
          <h2 className="text-slate-900 font-semibold text-3xl">Architecture</h2>
          <p className="text-white/80 text-wrap w-44 text-[14px] tracking-wider ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quis expedita voluptates excepturi ut error ad iure molestias cumque reprehenderit.
          </p>
          <button className="bg-white bg-opacity-20 backdrop-blur-md text-white px-4 py-1.5 rounded-md mt-4 outline-none transition-all duration-500 scale-95 hover:border-[#0F172A] hover:border-[0.5px] tracking-[0.12rem] border border-opacity-100 border-current  ease-in-out">
            Click
          </button>
        </div>
      </div>

      {/* card2 */}
      <div className="flex gap-2 cursor-pointer  bg-opacity-[0.01] backdrop-blur-md rounded-2xl w-[28%]  h-[88%] shadow-lg shadow-slate-800  hover:shadow-slate-900  justify-center items-center transition-all duration-500 ease-in-out ">
        <div className="w-48 h-[20rem] mr-2  rounded-2xl overflow-hidden shadow-xl shadow-slate-900 -translate-x-6  hover:translate-x-2 transition-all duration-1000 ease-in-out">
          <img src={rightImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className=" max-h-60 p-4 tracking-widest ">
          <h2 className="text-slate-900 font-semibold text-3xl">Fashion</h2>
          <p className="text-white/80 text-wrap w-44 text-[14px] tracking-wider ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quis expedita voluptates excepturi ut error ad iure molestias cumque reprehenderit.
          </p>
          <button className="bg-white bg-opacity-20 backdrop-blur-md text-white px-4 py-1.5 rounded-md mt-4 outline-none transition-all duration-500 scale-95 hover:border-[#0F172A] hover:border-[0.5px] tracking-[0.12rem] border border-opacity-100 border-current  ease-in-out">
            Click
          </button>
        </div>
      </div>

    </div>
  );
};

export default Card;
