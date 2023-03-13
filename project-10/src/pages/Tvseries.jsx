import axios from "axios";
import React, { useState, useEffect } from "react";
import { RxDotFilled } from "react-icons/rx";
import { TbMovie } from "react-icons/tb";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import Modal from "../components/Modal";
const key = "a44069ccf4250949a19d7bae7fa72fce";
const Tvseries = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [timeOut, setTimeOut] = useState(true);
  const [pages, setPages] = useState("");
  const [item, setItem] = useState('')

  const type = "TV Series";
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=${page}`
      )
      .then((res) => {
        console.log(res);
        setPages(res.data.total_pages);
        setItems(res.data.results);
      });
  }, [page]);

 

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  const handleDate = (date) => {
    return date.slice(0, -6);
  };

  const handleTimeOut = () => {
    setTimeOut(false);

    setTimeout(() => {
      setTimeOut(true);
    }, 2000);
  };
  if (timeOut) {
    return (
      <>
        <h1 className='text-center pt-7 text-3xl font-bold md:text-4xl '>TV Series</h1>
        {item === '' ? null : <Modal type={type} setItemInfo={setItem} item={item}/>}

        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 mx-5 mb-3 pt-12'>
          {items.map((item, id) => {
            return (
              <div
              onClick={() => {
                setItem(item)
              }}
                key={id}
                className='w-full h-full relative cursor-pointer hover-scale rounded-lg'>
                <img
                  className='rounded-lg w-full h-full'
                  src={
                    item.backdrop_path === null
                      ? "https://via.placeholder.com/150x90/10141e/FFFFFF?text=Image_not_available"
                      : `https://image.tmdb.org/t/p/original/${item.backdrop_path}`
                  }
                  alt={type === "Movie" ? item.title : item.name}
                />

                <div className='absolute bottom-1 lg:bottom-5 w-full z-40 mx-2 pr-3'>
                  <div className='flex items-center '>
                    <p className='text-xs lg:text-md'>
                      {handleDate(
                        type === "Movie"
                          ? item.release_date
                          : item.first_air_date
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
                    {truncateString(
                      type === "Movie" ? item.title : item.name,
                      25
                    )}
                  </p>
                </div>
                <div className='z-30 absolute bg-black/40 rounded-lg w-full h-full top-0'></div>
              </div>
            );
          })}
        </div>
        

        <div className='flex justify-center mb-6 mt-8'>
          <div className='flex text-white font-bold'>
            <button
              onClick={() => {
                setPage(page - 1);
                handleTimeOut;
              }}
              className='border-white  border-2 rounded-l-md px-2 py-1 flex items-center  hover:bg-white hover:text-[#10141e] transition duration-[400ms] hover:scale-[.96]'>
              {" "}
              <span className='text-xl px-1'>
                <BsArrowLeftShort />
              </span>{" "}
              Prev
            </button>
            <button className='border-white border-2 font-medium cursor-text bg-white text-[#10141e] px-2 py-1'>
              Page {page} of {pages}
            </button>
            <button
              onClick={() => {
                handleTimeOut;
                setPage(page + 1);
              }}
              className='border-white border-2 rounded-r-md px-2 py-1 flex items-center hover:bg-white hover:text-[#10141e] transition duration-[400ms] hover:scale-[.96]'>
              {" "}
              Next{" "}
              <span className='text-xl px-1'>
                <BsArrowRightShort />
              </span>{" "}
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default Tvseries;
