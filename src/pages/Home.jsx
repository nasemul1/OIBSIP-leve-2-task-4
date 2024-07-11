import React from 'react';
import side from '../assets/twist.webp';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className='w-full h-dvh flex justify-center items-center bg-gradient-to-r from-[#E295A0] to-violet-500'>
        <div id="login-card" className='w-10/12 h-3/4 text-white bg-white flex rounded-lg drop-shadow-lg'>
        <div id="left-side" className='w-3/6 hidden md:block bg-cover rounded-l-lg' style={{backgroundImage: `url(${side})`}}></div>
        <div id="right-side" className='p-6 w-full md:w-3/6 text-black bg-white md:rounded-r-lg flex flex-col justify-center items-center'>
            <p className='mb-6'>Welcome to </p>
            <Link to={'/login'} className='pl-4 pr-4 pt-2 pb-2 w-3/4 text-white text-center font-bold bg-violet-700 hover:bg-violet-800 border-0 rounded-sm'>Login</Link>
            <Link to={'/registration'} className='pl-4 pr-4 pt-2 pb-2 mt-6 w-3/4 text-white text-center font-bold bg-violet-700 hover:bg-violet-800 border-0 rounded-sm'>Sign Up</Link>
        </div>
        </div>
      </div>
    </>
  )
}

export default Home