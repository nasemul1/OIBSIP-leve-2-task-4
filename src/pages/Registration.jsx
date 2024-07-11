import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import side from '../assets/twist.webp'
import { Link, useNavigate } from 'react-router-dom';
import bcrypt from "bcryptjs";

const Registration = () => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let hashPass = bcrypt.hashSync(pass, 10);
    let regObj = {id, email, hashPass};

    fetch("http://localhost:8000/user", {
      method: "POST",
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(regObj)
    }).then((res)=>{
      toast.success('Registered successfully');
      navigate('/login');
    }).catch((err)=>{
      toast.error('Failed:' + err.message);
    });
  }
  return (
    <>
      <div className='w-full h-dvh flex justify-center items-center bg-gradient-to-r from-[#E295A0] to-violet-500'>
          <div id="regi-card" className='w-10/12 h-3/4 text-white bg-white flex rounded-lg drop-shadow-lg'>
              <div id="left-side" className='w-3/6 hidden md:block bg-cover rounded-l-lg' style={{backgroundImage: `url(${side})`}}></div>
              <div id="right-side" className='p-6 w-full md:w-3/6 text-black bg-white md:rounded-r-lg flex flex-col justify-center items-center'>
                <form onSubmit={handleSubmit} className='w-full flex flex-col items-center justify-center'>
                  <div className='w-3/4'>
                    <p className='text-left'>Hello !</p>
                    <p className='text-violet-700 font-bold'>Greetings</p>
                  </div>
                  <p className='m-5 align-center text-center'><span className='text-violet-700 font-semibold'>Sign up</span> Your Account</p>
                  <input placeholder='Username' type="text" id='user' value={id} onChange={e => setId(e.target.value)} className='mb-6 p-2 w-3/4 bg-inherit border-b-2 border-violet-700 rounded-sm outline-none' required/><br />
                  <input placeholder='Email' type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className='mb-6 p-2 w-3/4 bg-inherit border-b-2 border-violet-700 rounded-sm outline-none' required/><br />
                  <input placeholder='Password' type="password" name="pass" id="pass" value={pass} onChange={e => setPass(e.target.value)} className='mb-10 p-2 w-3/4 bg-inherit border-b-2 border-violet-700 rounded-sm outline-none' required/><br />
                  <button type="submit" className='pl-4 pr-4 pt-2 pb-2 w-3/4 text-white font-bold bg-violet-700 hover:bg-violet-800 border-0 rounded-sm'>Proceed</button>
                  <Link to={'/login'} className='mt-6 text-violet-700'>Sign In</Link>
                </form>
              </div>
          </div>
      </div>
    </>
  )
}

export default Registration