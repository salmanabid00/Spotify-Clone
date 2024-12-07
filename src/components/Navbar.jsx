import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate  = useNavigate()
  return (
    <>
      <div className='relative w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
          <img onClick={()=>navigate(-1)}
            className='w-8 bg-black p-2 rounded-2xl cursor-pointer'
            src={assets.arrow_left}
            alt="Left Arrow"
          />
          <img onClick={()=>navigate(+1)}
            className='w-8 bg-black p-2 rounded-2xl cursor-pointer'
            src={assets.arrow_right}
            alt="Right Arrow"
          />
        </div>
        <div className='absolute top-0 right-0 flex items-center gap-4 m-4'>
          <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>
            Explore Premium
          </p>
          <p className='bg-black text-white text-[15px] px-4 py-1 rounded-2xl cursor-pointer'>
            Install App
          </p>
          <p className='bg-purple-500 text-black w-7  h-7  rounded-full flex items-center justify-center cursor-pointer'>S          </p>
        </div>
      </div>
      <div className='flex items-center gap-2 mt-4'> 
        <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
        <p className='bg-black  px-4py-1 rounded-2xl cursor-pointer'>Music</p>
        <p className='bg-black  px-4py-1 rounded-2xl cursor-pointer'>Podcast's</p>

      </div>
    </>
  );
}

export default Navbar;
