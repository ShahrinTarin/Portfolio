import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const RootLayOut = () => {
    return (
        <div className=' text-white  '>
            <Navbar></Navbar>
           <div className='w-10/12 mx-auto'>
             <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayOut;