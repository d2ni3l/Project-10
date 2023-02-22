import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
const key = "a44069ccf4250949a19d7bae7fa72fce";
const Modal = ({ setItemInfo, item, type }) => {
  const [movieItem, setMovieItem] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${item.id}/credits?api_key=${key}&language=en-US`
      )
      .then((res) => {
        setMovieItem(res.data.cast);
      });
  }, []);

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


  const handleTypeDate = (type) => {
    if (type === "Movie"){
  return item.release_date
    }else if(type === 'TV Series'){
      return item.first_air_date
    }else{
      return item.release_date
    }
  }

  const handleTypeTitle = (type) => {
    if (type === "Movie"){
  return item.title
    }else if(type === 'TV Series'){
      return item.name
    }else{
      return item.title
    }
  }
  return (
    <>
      <div className='fixed z-50  w-[110vw] h-[110vh] md:h-[130vh] md:w-[120vw] -mt-[7.5rem]  overflow-x-hidden overflow-y-scroll flex justify-center md:ml-[-6.7rem] items-center bg-[#0000006e]  backdrop-blur-sm'>
        <div className=' relative px-10 py-5 max-w-3xl scale-[0.7] sm:scale-[0.9] lg:scale-[1]  h-auto bg-[#10141e] shadow-lg  border-white rounded-lg'>
          <div className='flex justify-end mx-0 mt-5'>
            <span className='text-yellow-300 '></span>
            <button
              onClick={() => {
                setItemInfo("");
              }}
              className='text-2xl text-gray-300 focus:scale-[.8] focus:text-[#7b75f5] transition hover:text-[#7b75f5]'>
              <AiOutlineClose />
            </button>
          </div>
          <div className='flex justify-center mt-10 gap-10'>
            <div className=''>
              <img
                className='w-52 mt-3 rounded border-2 border-gray-300'
                src={
                  item.poster_path === null
                    ? "https://via.placeholder.com/150x90/7b75f5/FFFFFF?text=Image_not_available"
                    : `https://image.tmdb.org/t/p/original/${item.poster_path}`
                }
                alt=''
              />
            </div>
            <div className='flex flex-col gap-5'>
              <h2 className='text-4xl max-w-[12rem] font-semibold '>
                {truncateString(handleTypeTitle(type))}
              </h2>
              <p className='max-w-[12rem]'>
                {truncateString(item.overview, 150)}
              </p>
            </div>
          </div>

          <h3 className='font-medium text-lg mt-4 mb-1'>
            {item.cast === null ? "" : "Casts"}
          </h3>
          <div className='flex justify-between gap-1'>
            <div className=' w-[20rem] flex flex-wrap   gap-1'>
              {movieItem.slice(0, 10).map((item, id) => {
                return (
                  <div key={id}>
                    <button className='py-1 px-2 font-medium tracking-wide cursor-text text-xs rounded-lg border border-gray-300'>
                      {item.name}
                    </button>
                  </div>
                );
              })}
            </div>
            <div className='flex flex-col text-sm bg-[#5a6a90] gap-1 justify-center px-3 py-7 rounded-lg'>
              <p className='tracking-wide'>
                Media: <span className='font-bold'>{type}</span>
              </p>
              <div className='border-b-[2px] border-[#ffffff4e] rounded-2xl'></div>

              <p className='tracking-wide'>
                Release date:{" "}
                <span className='font-bold'>
                {handleDate(
                      handleTypeDate(type)
                    )}
                </span>
              </p>
              <div className='border-b-[2px] border-[#ffffff4e] rounded-2xl'></div>

              <div className='flex'>
                <p className='tracking-wide'>Rating: </p>
                &nbsp;
                <div className='text-lg -mt-[0.28rem]'>
                  <Rater
                    total={5}
                    rating={Math.round(item.vote_average) / 2}
                    interactive={false}></Rater>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
