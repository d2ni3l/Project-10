import React, {useState} from "react";
import {BsFillPersonFill, BsFillBookmarkFill} from 'react-icons/bs'
import { AiFillAppstore } from "react-icons/ai";
import { TbMovie } from "react-icons/tb";
import { BiMoviePlay } from "react-icons/bi";
import { BiCameraMovie } from "react-icons/bi";
import {Link} from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'

const Navbar = () => {
  const [changeColor, setChangeColor] = useState('/')
  const {user} = UserAuth();

  // const handleColor = () => {
  //   if(changeColor === '/'){
  //     setChangeColor('/')
  //   }else if(changeColor === '/tvseries'){
  //     setChangeColor('/tvseries')
  //   }else if (changeColor === 'movies'){
  //     setChangeColor('/movies')
  //   }
  //   }
  return (
    <>
      <div className='bg-[#171e31] py-6 flex justify-around items-center  text-[#5a6a90] text-2xl md:fixed md:flex-col md:h-[90vh] md:ml-3 md:mt-20 md:px-6 md:rounded-lg'>
        <span className={`text-3xl text-[#7b75f5]  cursor-pointer `}>
          <Link to='/' >
          <BiCameraMovie/>
          </Link>
        </span>
        
        
          <div className="flex justify-between md:flex-col gap-12 ">
          <span className={`cursor-pointer hover:text-[#7b75f5] hover:scale-95 transition-all duration-300 ${changeColor === '/' && 'text-white'}`}>
            
            <Link to='/' onClick={() => {setChangeColor('/')}}>
            <AiFillAppstore />
            </Link>
          </span>
          <span className={`cursor-pointer hover:text-[#7b75f5] hover:scale-95 transition-all duration-300 ${changeColor === '/tvseries' && 'text-white'}`}>
            <Link to='/tvseries' onClick={() => {setChangeColor('/tvseries')}}>
            <TbMovie />
            </Link>
          </span>
          <span className={`cursor-pointer hover:text-[#7b75f5] hover:scale-95 transition-all duration-300 ${changeColor === '/movies' && 'text-white'}`}>
            <Link to='/movies' onClick={() => {setChangeColor('/movies')}}>
            <BiMoviePlay />
            </Link>
          </span>

          </div>
          {user === null ?  <Link to='/account'>
          <span className="text-3xl text-white cursor-pointer hover:text-[#7b75f5] hover:scale-95 transition-all duration-300">
            <BsFillPersonFill/> 
          </span>
          </Link> : <Link to='/saved'>
          <span className="text-xl hover:text-white cursor-pointer text-[#7b75f5] hover:scale-95 transition-all duration-300">
            <BsFillBookmarkFill/>
          </span>
          </Link> }
      </div>
    </>
  );
};

export default Navbar;

// fixed bg-red-400 rounded-xl top-[15%] left-[15px] w-[150px] h-screen
