import React from 'react';
import { Outlet } from 'react-router';
import Home from '../Component/Home';
import Navbar from '../Component/Navbar';

const RootLayOut = () => {
    return (
        <div className='bg-gradient-to-b from-[#0f0f1c] to-black text-white  '>
            <Navbar></Navbar>
           <div className='w-10/12 mx-auto'>
             <Outlet></Outlet>
           </div>
        </div>
    );
};

export default RootLayOut;