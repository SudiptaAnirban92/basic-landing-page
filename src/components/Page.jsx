import React from "react";
import Icon from '../assets/icon.jpg'

const Page = (props) => {
  return (
    <div className="w-full py-28 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
      <img className="w-[500px] mx-auto my-4" src={props.image} alt="/" />
      <div className="flex flex-col justify-center p-4">
        <h1 className="text-[#091133] font-bold md:text-5xl sm:text-4xl text-3xl py-2 text-center sm:text-left">Light, Fast & Powerful</h1>
        <p className="my-4 text-center sm:text-left text-[#6F7CB2]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          accusantium non eius sapiente, quasi, iusto repudiandae illum,
          delectus quidem ullam blanditiis itaque. Nesciunt aperiam ipsam error
          ad ullam eos minus!
        </p>
        <div className="grid grid-cols-2 my-6 ">
            <img src={Icon} alt="/" />  
            <img src={Icon} alt="/"  className="ml-4"/>
        </div>
        <div className="grid grid-cols-2">
            <h2 className="text-xl font-semibold">Title goes here</h2>
            <h2 className="text-xl font-semibold ml-4">Title goes here</h2>
        </div>
        <div className="grid grid-cols-2">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic animi voluptatibus omnis?</p>
            <p className="ml-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic animi voluptatibus omnis?</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Page;
