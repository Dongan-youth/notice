import React from 'react'

const ModeBtn = () => {
  return (
    <div className='flex justify-center items-center w-[7.25rem] h-[65%] bg-[#F6F6F9] rounded-[0.625rem] mx-[1.88rem]'>
      <button className='flex justify-center items-center w-[6rem] h-[3rem] bg-[#C6CCD8] rounded-[0.625rem]'>
        <button className='flex justify-center items-center w-[3rem] h-[3rem] bg-[#FFFFFF] rounded-[0.625rem]'>
          <img src='LightIcon.png' alt='LightMode' className='flex w-[2.2rem] h-[2.2rem] m-[0.5rem]'></img>
        </button>
        <button className='flex justify-center items-center w-[3rem] h-[3rem] bg-[#C6CCD8] rounded-[0.625rem]'>
          <img src='DarkIcon.png' alt='DarkMode' className='flex w-[1.875rem] h-[1.875rem] m-[0.5rem]'></img>
        </button>
      </button>
    </div>
  )
}

export default ModeBtn