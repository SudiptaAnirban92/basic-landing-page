import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaDribbbleSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#E7ECFF] py-8">
      <div className="text-[#505F98] flex justify-center items-center h-16 max-w-[1240px] mx-auto px-4">
        <p className="flex w-80 mx-4">&copy;2024 YourCompany</p>
        <h1 className="w-full flex justify-center text-3xl text-[#37447E] font-bold mx-4">
          Landing
        </h1>
        <button className="w-[300px] bg-[#111B47] text-white rounded-md py-1 mx-4 active:bg-[#505F98]">
          Buy Now
        </button>
      </div>
      <hr className="w-[90%] md:w-[70%] mx-auto border-t border-[#6F7CB2]"/>
      <div className="text-[#505F98] flex justify-between items-center h-16 max-w-[1240px] mx-auto px-4">
        <ul className="hidden md:flex">
          <li className="p-4">Home</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
        </ul>
        <div className="flex justify-between my-6 mx-auto md:mx-0">
          <FaFacebookSquare size={25} className="mx-4" />
          <FaGithubSquare size={25} className="mx-4" />
          <FaInstagram size={25} className="mx-4" />
          <FaTwitterSquare size={25} className="mx-4" />
          <FaDribbbleSquare size={25} className="mx-4" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
