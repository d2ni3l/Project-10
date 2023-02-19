import React, { useEffect, useState } from "react";
import Heading from "./Heading";

import { RxDotFilled } from "react-icons/rx";
import { TbMovie } from "react-icons/tb";

const Trending = ({trending, type, section}) => {
 

  const handleDate = (date) => {
    return date.slice(0, -6);
  };
  
  return (
    <>
      <Heading section={section} type={type} />
      <div className='pt-5'></div>
      <div className='flex gap-5 pb-2 shrink-0 overflow-x-scroll scroll-smooth scroll-bar items-start w-screen pr-32'>
        {trending.slice(0, 10).map((item, id) => (
          <div key={id} className='min-w-[420px] min-h-[220px] relative'>
            <img
              className='rounded-lg z-10 w-full h-full max-h-[236px]'
              src={item.backdrop_path === null ? 'https://via.placeholder.com/150x90/7b75f5/FFFFFF?text=Image_not_available' : `https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
              alt={type === 'Movie' ? item.title : item.name}
            />
            <div className='z-40 absolute w-full h-full rounded-lg bg-black/40 top-0 '></div>
            <div className='absolute bottom-9 w-full z-40 mx-5'>
              <div className='flex items-center '>
                <p className='text-md'>{handleDate(type === 'Movie' ? item.release_date : item.first_air_date )}</p>
                <span className='text-sm'>
                  <RxDotFilled />
                </span>
                <span className='text-md text-gray-400'>
                  <TbMovie />
                </span>
                &nbsp;
                <p className='text-sm'>{type === 'Movie' ? 'Movie' : 'Tv Series'}</p>
              </div>
              <p className='text-xl font-semibold tracking-wide'>
                {type === 'Movie' ? item.title : item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Trending;
