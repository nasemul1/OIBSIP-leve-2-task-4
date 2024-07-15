import React from 'react';
import side from '../assets/twist.webp';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className='w-full h-dvh flex justify-center items-center bg-gradient-to-r from-[#C2D2E1] to-[#F9C6B0]'>
        <div id="login-card" className='w-10/12 h-3/4 text-white bg-white flex rounded-lg drop-shadow-lg'>
          <div id="left-side" className='w-3/6 hidden md:block bg-cover rounded-l-lg' style={{backgroundImage: `url(${side})`}}></div>
          <div id="right-side" className='p-6 w-full md:w-3/6 text-black bg-white md:rounded-r-lg flex flex-col justify-center items-center'>
            <p className='mb-6 text-left w-3/4'>Hello <span className='font-bold text-[#1A459F]'>user !</span> <br />You have a greatful journey.</p>
            <Link to={'/registration'} className='pl-4 pr-4 pt-2 pb-2 w-3/4 text-white text-center font-bold bg-[#1A459F] hover:bg-[#2c61d1] border-0 rounded-sm'>Sign Up</Link>
            <div className='w-2/3 h-[1px] mt-4 bg-gray-300'></div>
            <Link to={'/login'} className='pl-4 pr-4 pt-2 pb-2 mt-4 w-3/4 text-white text-center font-bold bg-[#1A459F] hover:bg-[#2c61d1] border-0 rounded-sm'>Login</Link>
        </div>
        </div>
      </div>
    </>
  )
}

export default Home