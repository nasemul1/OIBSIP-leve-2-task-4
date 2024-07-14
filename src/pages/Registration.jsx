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

    fetch("https://oibsip-level-2-task-4-backend.vercel.app/api/users/" + id).then((res)=>{
      return res.json();
    }).then((resp)=>{
      toast.error( resp.id + ' not available. Try another one');
    }).catch((err)=>{
      let hashPass = bcrypt.hashSync(pass, 10);
      let regObj = {id, email, hashPass};

      fetch("https://oibsip-level-2-task-4-backend.vercel.app/api/users/", {
        method: "POST",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(regObj)
      }).then((res)=>{
        toast.success('Registered successfully');
        navigate('/login');
      }).catch((err)=>{
        toast.error('Failed:' + err.message);
      });
    })
  }
  return (
    <>
      <div className='w-full h-dvh flex justify-center items-center bg-gradient-to-r from-[#C2D2E1] to-[#F9C6B0]'>
          <div id="regi-card" className='w-10/12 h-3/4 text-white bg-white flex rounded-lg drop-shadow-lg'>
              <div id="left-side" className='w-3/6 hidden md:block bg-cover rounded-l-lg' style={{backgroundImage: `url(${side})`}}></div>
              <div id="right-side" className='p-6 w-full md:w-3/6 text-black bg-white md:rounded-r-lg flex flex-col justify-center items-center'>
                <form onSubmit={handleSubmit} className='w-full flex flex-col items-center justify-center'>
                  <div className='w-3/4'>
                    <p className='text-left'>Hello !</p>
                    <p className='text-[#1A459F] font-bold'>Greetings</p>
                  </div>
                  <p className='m-5 align-center text-center'><span className='text-[#1A459F] font-semibold'>Sign up</span> Your Account</p>
                  <input placeholder='Username' type="text" id='user' value={id} onChange={e => setId(e.target.value)} className='mb-6 p-2 w-3/4 bg-inherit border-b-2 border-[#1A459F] rounded-sm outline-none' required/><br />
                  <input placeholder='Email' type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className='mb-6 p-2 w-3/4 bg-inherit border-b-2 border-[#1A459F] rounded-sm outline-none' required/><br />
                  <input placeholder='Password' type="password" name="pass" id="pass" value={pass} onChange={e => setPass(e.target.value)} className='mb-10 p-2 w-3/4 bg-inherit border-b-2 border-[#1A459F] rounded-sm outline-none' required/><br />
                  <button type="submit" className='pl-4 pr-4 pt-2 pb-2 w-3/4 text-white font-bold bg-[#1A459F] hover:bg-[#2c61d1] border-0 rounded-sm'>Proceed</button>
                  <div className='mt-6'>
                    <Link to={'/'} className='mt-6 text-[#1A459F]'>Home</Link>
                    <span className='ml-2 mr-2'>|</span>
                    <Link to={'/login'} className='mt-6 text-[#1A459F]'>Login</Link>
                  </div>
                </form>
              </div>
          </div>
      </div>
    </>
  )
}

export default Registration
