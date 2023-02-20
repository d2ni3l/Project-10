import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
const key = "a44069ccf4250949a19d7bae7fa72fce";
const Modal = ({ setItemInfo, item }) => {
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
  console.log(movieItem);
  return (
    <>
      <div className='fixed z-50  w-screen h-screen -mt-10 overflow-x-hidden overflow-y-auto flex justify-center items-center bg-[#0000006e] md:ml-[-6.7rem] backdrop-blur-sm'>
        <div className='max-w-3xl h-auto bg-[#10141e] shadow-lg  border-white rounded'>
          <div className='flex justify-end mx-10 mt-5'>
            <button className='text-2xl text-gray-300 focus:scale-[.8] focus:text-[#7b75f5]'>
              <AiOutlineClose />
            </button>
          </div>
          <div className="flex justify-center mt-5">
          <h2 className="text-xl font-bold tracking-wide">{item.title}</h2>

          </div>
          <div className='p-32'>
            <div
              onClick={() => {
                setItemInfo("");
              }}
              className='w-64 '>
              {movieItem.map((item, id) => {
                return (
                  <>
                    <button className='py-1 px-2  text-xs rounded-lg border border-gray-300'>
                      {item.name}
                    </button>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
