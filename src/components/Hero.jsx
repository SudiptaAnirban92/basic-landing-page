import React from "react";
import Designer1 from "../assets/designer1.jpg";

const Hero = () => {
  return (
    <div className="w-full py-16 px-4 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-[#091133] text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-16 mx-4">
            Introduce Your Product Quickly & Effectively
          </h1>
          <p className="text-[#505F98] text-xl mx-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ex
            tempora dicta doloremque porro saepe veniam vero sequi eum, rerum
            ipsa quidem facere labore, modi dolor officia impedit. Aut, saepe.
          </p>
          <div className="flex w-[406px] pr-4 py-2 mx-auto md:mx-0">
            <button className="w-[200px] bg-[#111B47] text-white rounded-md py-1 ml-4 active:bg-[#505F98]">
              Purchase UI Kit
            </button>
            <button className="w-[200px] bg-white text-[#111B47] rounded-md py-1 ml-4 border-[#111B47] border-2 font-bold active:bg-[#E7ECFF]">
              Learn More
            </button>
          </div>
        </div>
        <img className="mx-auto w-full" src={Designer1} alt="" />
      </div>
    </div>
  );
};

export default Hero;
