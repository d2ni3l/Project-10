import React from "react";
import { useEffect } from "react";
import { RxDotFilled } from "react-icons/rx";
import { TbMovie } from "react-icons/tb";

import Heading from "./Heading";

const Row = ({ show, section, type, setItemInfo, setType }) => {
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
    <>
      <Heading section={section} type={type} />
      <div className='pt-5'></div>
      {
        <Show
          show={show}
          handleDate={handleDate}
          type={type}
          truncateString={truncateString}
          setItemInfo={setItemInfo}
          setType={setType}
        />
      }
      <div className='pt-7'></div>
      {
        <ShowLarger
          show={show}
          handleDate={handleDate}
          type={type}
          truncateString={truncateString}
          setItemInfo={setItemInfo}
          setType={setType}
        />
      }
    </>
  );
};

export default Row;

const Show = ({ show, handleDate, type, truncateString, setItemInfo, setType }) => {
  return (
    <>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 mx-5 '>
        {show.slice(0, 4).map((item, id) => (
          <div
            onClick={() => {
              setItemInfo(item);
              setType(type);
            }}
            key={id}
            className='w-full h-full relative cursor-pointer hover-scale'>
            <img
              className='rounded-lg w-full h-full'
              src={
                item.backdrop_path === null
                  ? "https://via.placeholder.com/150x90/7b75f5/FFFFFF?text=Image_not_available"
                  : `https://image.tmdb.org/t/p/original/${item.backdrop_path}`
              }
              alt={type === "Movie" ? item.title : item.name}
            />

            <div className='absolute bottom-1 lg:bottom-5 w-full z-40 mx-2'>
              <div className='flex items-center '>
                <p className='text-xs lg:text-md'>
                  {handleDate(
                    type === "Movie" ? item.release_date : item.first_air_date
                  )}
                </p>
                <span className='text-xs lg:text-md'>
                  <RxDotFilled />
                </span>
                <span className='text-sm lg:text-lg text-gray-300'>
                  <TbMovie />
                </span>
                &nbsp;
                <p className='text-xs lg:text-md'>
                  {type === "Movie" ? "Movie" : "Tv Series"}
                </p>
              </div>
              <p className='text-xs lg:text-md font-semibold   tracking-wide'>
                {truncateString(type === "Movie" ? item.title : item.name, 25)}
              </p>
            </div>
            <div className='z-30 absolute bg-black/40 rounded-lg w-full h-full top-0'></div>
          </div>
        ))}
      </div>
    </>
  );
};

const ShowLarger = ({
  show,
  handleDate,
  type,
  truncateString,
  setItemInfo,
  setType
}) => {
  return (
    <div className='flex justify-around mx-5 gap-3'>
      {show.slice(-2).map((item, id) => {
        return (
          <div
          onClick={() => {
            setItemInfo(item);
            setType(type);
          }}
            key={id}
            className='w-full h-full relative lg:h-[350px] cursor-pointer lg:w-[600px] hover-scale'>
            <img
              className='rounded-lg w-full h-full '
              src={
                item.backdrop_path === null
                  ? "https://via.placeholder.com/150x90/7b75f5/FFFFFF?text=Image_not_available"
                  : `https://image.tmdb.org/t/p/original/${item.backdrop_path}`
              }
              alt={type === "Movie" ? item.title : item.name}
            />

            <div className='absolute  bottom-1 sm:bottom-5 w-full z-40 mx-2 sm:mx-5'>
              <div className='flex items-center '>
                <p className=' text-xs sm:text-lg '>
                  {handleDate(
                    type === "Movie" ? item.release_date : item.first_air_date
                  )}
                </p>
                <span className=' text-xs sm:text-lg '>
                  <RxDotFilled />
                </span>
                <span className=' text-xs sm:text-lg lg:text-xl text-gray-300'>
                  <TbMovie />
                </span>
                &nbsp;
                <p className=' text-xs sm:text-lg '>
                  {type === "Movie" ? "Movie" : "Tv Series"}
                </p>
              </div>
              <p className='text-xs sm:text-lg font-semibold tracking-wide'>
                {truncateString(type === "Movie" ? item.title : item.name, 25)}
              </p>
            </div>
            <div className='z-30 absolute bg-black/50 rounded-lg w-full h-full top-0'></div>
          </div>
        );
      })}
    </div>
  );
};
