import React from 'react'
import { Link } from 'react-router-dom'

const LoggedinHover = () => {
  return (
    <div className='absolute flex-col top-[3.8rem] right-[0.009rem] w-[8.6875rem] h-[7.375rem] bg-[#F6F6F9] rounded-[0.625rem] shadow-md'>
        <Link to={'/mypage'} className='flex justify-center items-center w-[7.5625rem] h-[3.125rem] bg-[#FFFFFF] rounded-t-[0.625rem] mt-[0.56rem] mx-[0.56rem]'>
            <img src='MyProfile.png' alt='MyPage'></img>
            <p className='text-[#ABABAB] text-xm font-bold font-[Inter] ml-[0.5rem]'>My Profile</p>
        </Link>
        <Link to={'/'} className='flex justify-center items-center w-[7.5625rem] h-[3.125rem] bg-[#FFFFFF] rounded-b-[0.625rem] mb-[0.56rem] mx-[0.56rem] ]'>
            <img src='LogOut.png' alt='LogOut'></img>
            <p className='text-[#ABABAB] text-xm font-bold font-[Inter] ml-[0.75rem]'>LogOut</p>
        </Link>
    </div>
  )
}

export default LoggedinHover