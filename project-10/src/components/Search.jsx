import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
const Search = ({ setShowSearch, showSearch, setSearch }) => {
  const [value, setValue] = useState();

  const handleClick = () => {
    setSearch(value);
    setShowSearch(!showSearch);
  };
  const handleEnter = (event) => {
    if (event.keyCode === 13) {
      setSearch(value);
      setShowSearch(true);
     
    }
  };

  return (
    <>
      <div className='flex justify-center mx-10 mt-10 items-center'>
        <span className='text-3xl '>
          <BiSearchAlt />
        </span>
        <input
          onKeyDown={(e) => handleEnter(e)}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          placeholder='Search for movies or TV series '
          type='text'
          className=' focus:outline-none tracking-wide py-3 border-b-[1px]  border-transparent caret-[#7b75f5] focus:border-b-[1px] focus:border-b-[#5a6a90] bg-[#10141e]  mx-5 px-5 w-[100%]'
        />
        <button
          onClick={handleClick}
          className='bg-[#5a6a90] text-bold   rounded-lg  py-[.45rem] px-[.8rem]'>
          Search
        </button>
      </div>
    </>
  );
};
export default Search;
