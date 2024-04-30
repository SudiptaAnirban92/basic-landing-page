import React, { useState } from "react";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-[#505F98] flex justify-center items-center h-16 max-w-[1240px] mx-auto px-4">
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <h1 className="w-full flex justify-center text-3xl text-[#37447E] font-bold">
        Landing
      </h1>
      <button className="w-[300px] bg-[#111B47] text-white rounded-md py-1 mx-4 active:bg-[#505F98]">
        Buy Now
      </button>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <GiCancel size={25} className="ml-4 right-0" /> : <GiHamburgerMenu size={25} className="ml-4 right-0" />}
      </div>
      <div className={nav ? "fixed left-0 top-0 w-[50%] border-r border-[#E7ECFF] h-full bg-[#E7ECFF] ease-in-out duration-500" : "fixed left-[-100%]"}>
        <h1 className="w-full flex text-3xl text-[#37447E] font-bold m-4">
          Landing
        </h1>
        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-[#B8BED5]">Home</li>
          <li className="p-4 border-b border-[#B8BED5]">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
