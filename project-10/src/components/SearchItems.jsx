import axios from "axios";
import Row from "./Row";
import React, { useState, useEffect } from "react";
import { RxDotFilled } from "react-icons/rx";
import { TbMovie } from "react-icons/tb";
import Heading from "./Heading";
const key = "a44069ccf4250949a19d7bae7fa72fce";
const SearchItems = ({ search, setType, setItemInfo }) => {
  const [movieItems, setMovieItems] = useState([]);
  const [TVItems, setTVItems] = useState([]);
  

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${search}&page=1`
      )
      .then((res) => {
        setMovieItems(res.data.results);
      });
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${search}&page=1`
      )
      .then((res) => {
        setTVItems(res.data.results);
      });
  }, [search]);

  //   console.log("movie", movieItems);
  //   console.log("TV", TVItems);
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
      <div className='pt-10'></div>
      <Heading type='Movie' section='Results' />
      <div className='pt-5'></div>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 mx-5 '>
        {movieItems.slice(0, 10).map((item, id) => {
          const type = "Movie";
          return (
            <div
            onClick={() => {
                setItemInfo(item)
                setType(type)
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
      <div className='pt-7'></div>
      <Heading type='TV Series' section='Results' />
      <div className='pt-5'></div>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 mx-5 '>
        {TVItems.slice(0, 10).map((item, id) => {
          const type = "TV Series Search";
          
          return (
            <div
              onClick={() => {
                setType(type);
                 setItemInfo(item)
                console.log(item)
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
                alt={type === "Movie" ? item.title : item.original_title}
              />

              <div className='absolute bottom-1 lg:bottom-5 w-full z-40 mx-2 pr-3'>
                <div className='flex items-center '>
                  <p className='text-xs lg:text-md'>
                    {handleDate(
                      type === "Movie" ? item.release_date : item.release_date
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
                    type === "Movie" ? item.title : item.original_title,
                    25
                  )}
                </p>
              </div>
              <div className='z-30 absolute bg-black/40 rounded-lg w-full h-full top-0'></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchItems;
