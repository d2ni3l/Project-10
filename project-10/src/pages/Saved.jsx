import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { RxDotFilled } from "react-icons/rx";
import { TbMovie } from "react-icons/tb";
const Saved = () => {
  const { user, logOut } = UserAuth();
  const [item, setItem] = useState([]);
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setItem(doc.data()?.savedShows);
    });
  }, [user?.email]);

  console.log(item)

  return (
    <>

    <h1 className="text-center pt-6 text-3xl font-medium">Saved Shows</h1>
      <div className="flex justify-end">
      <button onClick={handleLogOut} className='bg-red-600 py-1 px-2 rounded-md  my-4 mx-3'>
        Log out
      </button>
      </div>
       
       <div  className="grid grid-cols-2 md:grid-cols-4 gap-3 mx-5 mb-3">
       {item?.map((item, id) => {
        return(
            <div key={id} className='w-full  h-full relative cursor-pointer hover-scale rounded-lg'>
        <img
          className='rounded-lg w-full h-full'
          src={
            item.backdrop_path === null
              ? "https://via.placeholder.com/150x90/10141e/FFFFFF?text=Image_not_available"
              : `https://image.tmdb.org/t/p/original/${item.img}`
          }
          alt={item.title}
        />
         <div className="w-full bg-black/50 h-full inset-0 rounded-lg  absolute"></div>
        <div className="absolute bottom-2 mx-3">
        <p className="">{item.title}</p>
        
        </div>
        </div> 
        )
       })}
       </div>

      
    </>
  );
};

export default Saved;
