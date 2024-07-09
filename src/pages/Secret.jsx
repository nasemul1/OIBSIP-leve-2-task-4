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
        </>
    )
}

export default Secret