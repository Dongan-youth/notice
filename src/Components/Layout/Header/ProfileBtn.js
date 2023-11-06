import React from 'react'
import { useState } from 'react'
import LoginHover from '../Header/LoginHover.js'

const ProfileBtn = () => {

  const [ isHovered, setIsHovered ] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button className={`relative top-[0.28rem] justify-center items-center rounded-full w-[3.5rem] h-[3.5rem] mr-[1.12rem] mb-[0.38rem] shadow-[] border-[2px] ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className='relative top-[0.19rem] left-[0.04rem] bg-white'>
        <img src='LoginImage.png' alt='Login' className='flex w-[1.5rem]'></img>
      </button>
      { isHovered && <LoginHover/> }
    </button>
  )
}

export default ProfileBtn