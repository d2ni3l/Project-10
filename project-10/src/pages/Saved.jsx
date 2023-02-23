import React, {useState} from 'react';
import { UserAuth } from '../context/AuthContext';
import {useNavigate} from 'react-router-dom';

const Saved = () => {
    const {user, logOut} = UserAuth();
   const navigate = useNavigate()

    const handleLogOut = async () => {
        try{
            await logOut();
            navigate('/')

        }catch(err){
            console.log(err)
        }
    };
  return (
    <>
      <button onClick={handleLogOut} className='bg-red-500 p-2'>log out</button>
    </>
  )
}

export default Saved