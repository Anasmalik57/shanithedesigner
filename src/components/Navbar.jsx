import React from "react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <div id="Navbar" className="w-full  relative flex justify-between items-center px-16  shadow-2xl " >
      {/* leftContainer */}
      <ul className="w-[15%] flex justify-around font-semibold text-[#c2dfe3] gap-5  ">
        <span className="tracking-widest cursor-pointer hover:text-[#fbc3bc] text-[18px] px-0.5 ">Home</span>
        <span className="tracking-widest cursor-pointer hover:text-[#fbc3bc] text-[18px] px-0.5 ">About</span>
        <span className="tracking-widest cursor-pointer hover:text-[#fbc3bc] text-[18px] px-0.5 ">Details</span>
      </ul>
      {/* middleContainer */}
      <div className="w-[6rem] p-2 box-border overflow-hidden object-cover">
        <img src={Logo} alt="" className="cursor-pointer rounded-full " />
      </div>
      {/* rightContainer */}
      <ul className="w-[15%] flex justify-around font-semibold text-[#c2dfe3] gap-5  ">
        <span className="tracking-widest cursor-pointer hover:text-[#fbc3bc] text-[18px] px-0.5 ">Contact</span>
        <span className="tracking-widest cursor-pointer hover:text-[#fbc3bc] text-[18px] px-0.5 ">Map</span>
        <span className="tracking-widest cursor-pointer hover:text-[#fbc3bc] text-[18px] px-0.5 ">Career</span>
      </ul>
    </div>
  );
};

export default Navbar;
