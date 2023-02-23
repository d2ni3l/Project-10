import React, { useState } from "react";
import { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const [logged, setLogged] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp, logIn } = UserAuth();

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      {
        await signUp(email, password);
        navigate("/saved");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      {
        await logIn(email, password);
        navigate("/saved");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className='pt-20'></div>
      {logged ? (
        <LogInForm
          setEmail={setEmail}
          setPassword={setPassword}
          handleLogIn={handleLogIn}
          setLogged={setLogged}
        />
      ) : (
        <SignInForm
          setEmail={setEmail}
          setPassword={setPassword}
          handleSignUp={handleSignUp}
          setLogged={setLogged}
        />
      )}
    </>
  );
};

export default Account;

const SignInForm = ({ setEmail, setPassword, handleSignUp, setLogged }) => {
  return (
    <>
      <div className='grid items-center justify-center mx-auto h-auto max-w-md border border-[#7b75f5] py-12 rounded'>
        <h2 className='pb-6 font-bold text-3xl '>Sign up</h2>
        <div className='pt-2'></div>
        <form onSubmit={handleSignUp} className='flex flex-col gap-5'>
          <div className='flex flex-col gap-2'>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name='email'
              className=' px-7 py-2 focus:outline-2 outline outline-1 border-0 outline-[#7b75f5] bg-gray-300 placeholder:text-[#10141e]/70 font-medium placeholder:text-md text-[#10141e]'
              placeholder='Email'
              type='text'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              name='password'
              className=' px-7 py-2 focus:outline-2 outline outline-1 border-0 outline-[#7b75f5] bg-gray-300 placeholder:text-[#10141e]/70 font-medium placeholder:text-md text-[#10141e]'
              placeholder='Password'
              type='text'
            />
          </div>
          <button
            type='submit'
            className='bg-[#7b75f5] scale-[.96] mt-2 hover:scale-[.98] transition duration-300  text-white font-bold py-2 px-4 rounded'>
            Sign up
          </button>
        </form>
        <p className='text-sm text-gray-400 pt-4 mx-1 tracking-wide'>
          Already a user?{" "}
          <span
            onClick={() => {
              setLogged(true);
            }}
            className='text-gray-300 underline cursor-pointer'>
            Login
          </span>
        </p>
      </div>
    </>
  );
};

const LogInForm = ({ setEmail, setPassword, setLogged, handleLogIn }) => {
  return (
    <>
      <div className='grid items-center justify-center mx-auto h-auto max-w-md border border-[#7b75f5] py-12 rounded'>
        <h2 className='pb-6 font-bold text-3xl '>Log In</h2>
        <div className='pt-2'></div>
        <form
           onSubmit={handleLogIn}
          className='flex flex-col gap-5'>
          <div className='flex flex-col gap-2'>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name='email'
              className=' px-7 py-2 focus:outline-2 outline outline-1 border-0 outline-[#7b75f5] bg-gray-300 placeholder:text-[#10141e]/70 font-medium placeholder:text-md text-[#10141e]'
              placeholder='Email'
              type='text'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              name='password'
              className=' px-7 py-2 focus:outline-2 outline outline-1 border-0 outline-[#7b75f5] bg-gray-300 placeholder:text-[#10141e]/70 font-medium placeholder:text-md text-[#10141e]'
              placeholder='Password'
              type='text'
            />
          </div>
          <button
            type='submit'
            className='bg-[#7b75f5] scale-[.96] mt-2 hover:scale-[.98] transition duration-300  text-white font-bold py-2 px-4 rounded'>
            Log In
          </button>
        </form>
        <p className='text-sm text-gray-400 pt-4 mx-1 tracking-wide'>
          Already a user?{" "}
          <span
            onClick={() => {
              setLogged(false);
            }}
            className='text-gray-300 underline cursor-pointer'>
            Sign Up
          </span>
        </p>
      </div>
    </>
  );
};
