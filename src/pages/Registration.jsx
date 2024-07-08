import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import side from '../assets/programmer.webp'
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let regObj = {id, email, pass};
    // console.log(regObj);

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
      <div className='w-full h-dvh flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500'>
          <div id="regi-card" className='w-10/12 sm:9/12  h-3/5 sm:h-fit text-white bg-white flex rounded-lg drop-shadow-lg'>
              <div id="left-side" className='w-3/5 hidden sm:flex justify-center items-center'>
                <img src={side} alt="side image" className='rounded-lg'/>
              </div>
              <div id="right-side" className='pl-6 pt-4 pb-4 pr-4 w-full sm:w-2/5 text-black sm:text-white bg-white sm:bg-sky-500/100 sm:rounded-r-lg flex flex-col justify-center items-center'>
                <form onSubmit={handleSubmit}>
                  <h1 className='mb-2 font-semibold text-2xl'>User Signup</h1>
                  <label htmlFor="user" >Username <span className='text-red-600'>*</span></label><br />
                  <input type="text" id='user' value={id} onChange={e => setId(e.target.value)} className='mb-3 p-1 bg-inherit border rounded-sm outline-none' required/><br />
                  <label htmlFor="email">Email <span className='text-red-600'>*</span></label><br />
                  <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className='mb-3 p-1 bg-inherit border rounded-sm outline-none' required/><br />
                  <label htmlFor="pass">Password <span className='text-red-600'>*</span></label><br />
                  <input type="password" name="pass" id="pass" value={pass} onChange={e => setPass(e.target.value)} className='mb-4 p-1 bg-inherit border rounded-sm outline-none' required/><br />
                  <button type="submit" className='pl-4 pr-4 pt-2 pb-2 mr-3 text-white bg-blue-500 hover:bg-sky-600 border-0 rounded-md'>Proceed</button>
                  <button className='pl-4 pr-4 pt-2 pb-2 text-white bg-red-500 hover:bg-red-600 border-0 rounded-md'>Back</button>
                </form>
              </div>
          </div>
      </div>
    </>
  )
}

export default Registration