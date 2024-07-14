import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Secret() {
    const navigate = useNavigate();

    useEffect(()=>{
        let user = sessionStorage.getItem('user');
        if(user === '' || user === null){
            navigate('/login');
        }
    }, []);

    return (
        <>
            <div id="nav" className='w-screen h-16 bg-violet-700 flex items-center justify-end'>
                <Link to={'/login'} className='text-white mr-8'>Logout</Link>
            </div>
            <div id="main" className='w-full p-10 font-bold text-3xl sm:text-4xl flex flex-col items-center'>
                <h1 className='text-center mb-10'>Secret Page</h1>
                <iframe className='w-11/12 sm:w-3/4 h-auto sm:h-[60vh]' src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=uT2mR_LIJ_7XeBLF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </>
    )
}

export default Secret