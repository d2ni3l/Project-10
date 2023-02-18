import React from 'react'

const Heading = ({title, type}) => {
  return (
    <>
     <div className="flex justify-between items-center mx-5">
        <div className='flex gap-3 items-center'>
          <h2 className="tracking-wide text-2xl text-gray-300 ">Trending</h2>
          <button className="text-xs mt-2 flex justify-center items-center lowercase rounded-lg py-[.15rem] px-3 border-gray-300 font-bold border-[1.7px]"><span className='text-gray-300 mt-[-.1rem]'>Movie</span></button>
        </div>

        <div className="mt-3">
            <p className=" text-[#5a6a90] uppercase text-sm hover:underline transition duration-300 font-medium cursor-pointer hover:text-gray-300">see more</p>
        </div>
     </div>
    </>
  )
}

export default Heading