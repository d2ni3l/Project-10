import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import axios from "axios";
import requests from "../Request";
import {RxDotFilled} from 'react-icons/rx';
import {TbMovie} from 'react-icons/tb';

const Trending = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    axios.get(requests.requestTrending).then((res) => {
      setTrending(res.data.results);
      
    });
  }, []);

  const handleDate = (date) => {
     return date.slice(0, -6)
  }
  console.log(trending)
  return (
    <>
      <Heading />
      <div className='pt-5'></div>
      <div className='flex gap-5 pb-2 shrink-0 overflow-x-scroll scroll-smooth scroll-bar items-start w-screen pr-32'>
       

        {trending.slice(0, 10).map((item, id) => (
          <div key={id} className='min-w-[420px] min-h-[220px] relative'>
            <img
              className='rounded-lg z-10 w-full h-full '
              src={`https://image.tmdb.org/t/p/w1280/${item.backdrop_path}`}
              alt=''
            />
            <div className='z-40 absolute w-full h-full rounded-lg bg-black/40 top-0 '></div>
            <div className="absolute bottom-9 w-full z-40 mx-5">
                <div className="flex items-center ">
                <p className="text-md">{handleDate(item.release_date)}</p>
                <span className="text-sm"><RxDotFilled/></span>
                <span className="text-md text-gray-400"><TbMovie/></span>
                &nbsp;
                <p className="text-sm">Movie</p>
                </div>
                <p className="text-xl font-semibold tracking-wide">{item.title}</p>
                </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Trending;
