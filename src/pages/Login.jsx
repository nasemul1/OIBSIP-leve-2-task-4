import React, { useEffect, useState } from 'react'
import side from '../assets/twist.webp'
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import bcrypt from "bcryptjs";

const Login = () => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const navigate = useNavigate();

  useEffect(()=>{
    sessionStorage.clear() 
  }, []);

  const proceedLogin = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/user/" + user).then((res)=>{
      return res.json();
    }).then((resp)=>{
      if(Object.keys(resp).length === 0){
        toast.error('Please enter valid username');
      } else {
        // console.log(resp.hashPass);
        // if(resp.pass === pass){
        //   toast.success('Loged In successfully');
        //   sessionStorage.setItem('user', user);
        //   navigate('/secret');
        // } else {
        //   toast.error('Please enter valid ceridentials');
        // }
        bcrypt.compare(pass, resp.hashPass, function(err, res) {
          if(err){
            toast.error('Error:' + err.message);
          }
          else if(!res){
            toast.error('Please enter valid ceridentials');
          }
          else{
            toast.success('Loged In successfully');
            sessionStorage.setItem('user', user);
            navigate('/secret');
          }
        });
      }
    }).catch((err)=>{
      toast.error('Login failed due to: ' + err.message);
    })
  }

  return (
    <>
      <div className='w-full h-dvh flex justify-center items-center bg-gradient-to-r from-[#E295A0] to-violet-500'>
        <div id="login-card" className='w-10/12 h-3/4 text-white bg-white flex rounded-lg drop-shadow-lg'>
        <div id="left-side" className='w-3/6 hidden md:block bg-cover rounded-l-lg' style={{backgroundImage: `url(${side})`}}></div>
        <div id="right-side" className='p-6 w-full md:w-3/6 text-black bg-white md:rounded-r-lg flex flex-col justify-center items-center'>
          <form onSubmit={proceedLogin} className='w-full flex flex-col items-center justify-center'>
            <div className='w-3/4'>
              <p className='text-left'>Hello !</p>
              <p className='text-violet-700 font-bold'>Greetings</p>
            </div>
            <p className='m-5 align-center text-center'><span className='text-violet-700 font-semibold'>Login</span> Your Account</p>
            <input placeholder='Username' type="text" id='user' value={user} onChange={e => setUser(e.target.value)} className='mb-6 p-2 w-3/4 bg-inherit border-b-2 border-violet-700 rounded-sm outline-none' required/><br />
            <input placeholder='Password' type="password" name="pass" id="pass" value={pass} onChange={e => setPass(e.target.value)} className='mb-10 p-2 w-3/4 bg-inherit border-b-2 border-violet-700 rounded-sm outline-none' required/><br />
            <button type="submit" className='pl-4 pr-4 pt-2 pb-2 w-3/4 text-white font-bold bg-violet-700 hover:bg-violet-800 border-0 rounded-sm'>Proceed</button>
            <Link to={'/registration'} className='mt-6 text-violet-700'>Create a new account</Link>
          </form>
        </div>
        </div>
      </div>
    </>
  )
}

export default Login