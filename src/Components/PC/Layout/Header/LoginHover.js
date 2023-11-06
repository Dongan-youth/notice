import React from 'react'

const LoginHover = () => {
  return (
    <div className='absolute top-[3.8rem] right-[0.009rem] w-[8.6875rem] h-[4.25rem] bg-[#F6F6F9] rounded-[0.625rem]'>
        <button className='flex justify-center items-center w-[7.5625rem] h-[3.125rem] bg-[#FFFFFF] rounded-[0.625rem] m-[0.56rem]'>
            <img src='LogIn.png' alt='Login'></img>
            <p className='text-[#ABABAB] text-xm font-bold font-[Inter] ml-[0.75rem]'>LogIn</p>
        </button>
    </div>
  )
}

export default LoginHover