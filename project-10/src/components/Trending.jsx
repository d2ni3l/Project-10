import React from "react";
import Heading from "./Heading";

import { RxDotFilled } from "react-icons/rx";
import { TbMovie } from "react-icons/tb";

const Trending = ({ trending, type, section, setItemInfo, setType }) => {

  const handleDate = (date) => {
    return date.slice(0, -6);
  };
  

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <div>
      <Heading section={section} type={type} />
      <div className='pt-5'></div>
      <div
        
        className='flex hover-scale gap-5   pb-2 shrink-0 overflow-x-scroll scroll-smooth scroll-bar items-start w-screen pr-12 mx-5 md:mx-0'>
        {trending.slice(0, 10).map((item, id) => {
          return (
            <div
              onClick={() => {
                setItemInfo(item);
                setType(type);
              }}
              
              key={id}
              className='min-w-[420px] min-h-[220px] relative cursor-pointer'>
              <img
                className='rounded-lg z-10 w-full h-full max-h-[236px]'
                src={
                  item.backdrop_path === null
                    ? "https://via.placeholder.com/150x90/7b75f5/FFFFFF?text=Image_not_available"
                    : `https://image.tmdb.org/t/p/original/${item.backdrop_path}`
                }
                alt={type === "Movie" ? item.title : item.name}
              />
              <div className='z-40 absolute w-full h-full rounded-lg bg-black/40 top-0 '></div>
              <div className='absolute bottom-9 w-full z-40 mx-5'>
                <div className='flex items-center '>
                  <p className='text-md'>
                    {handleDate(
                      type === "Movie" ? item.release_date : item.first_air_date
                    )}
                  </p>
                  <span className='text-sm'>
                    <RxDotFilled />
                  </span>
                  <span className='text-md text-gray-400'>
                    <TbMovie />
                  </span>
                  &nbsp;
                  <p className='text-sm'>
                    {type === "Movie" ? "Movie" : "Tv Series"}
                  </p>
                </div>
                <p className='text-xl font-semibold tracking-wide'>
                  {truncateString(
                    type === "Movie" ? item.title : item.name,
                    25
                  )}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
