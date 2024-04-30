import React from 'react'

const Last = () => {
  return (
    <div className="w-full py-72 px-4">
      <div className="max-w-[1240px] mx-auto">
        <div className=" justify-center text-center">
          <h1 className="text-[#091133] font-bold md:text-5xl sm:text-4xl text-3xl py-2">
            A Price To Suit Everyone
          </h1>
          <p className="text-[#505F98] text-xl mx-auto w-[400px] my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fuga praesentium ducimus aperiam exercitationem soluta.
          </p>
          <h1 className="text-[#091133] font-bold md:text-5xl sm:text-4xl text-3xl py-2">
            $40
          </h1>
          <p className="text-[#505F98] text-xl mx-auto w-[400px]">
            UI Design Kit
          </p>
          <div className="flex flex-col w-[406px] mx-auto my-16">
            <p className='py-1'>See, One price. Simple.</p>
            <button className="w-[200px] bg-[#111B47] text-white rounded-md py-1 mx-auto active:bg-[#505F98]">
              Purchase Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Last