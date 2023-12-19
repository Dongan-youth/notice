import React, { useState } from 'react'
import LoginHover from './LoginHover.js'

const ProfileBtn = () => {
  const [ isHovered, setIsHovered ] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className='relative flex justify-center items-center'>
      <div
        className='aspect-square w-full max-w-[3.25rem] flex justify-center items-center rounded-full border-2 border-[#D2D2D2] cursor-pointer'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src='LoginImage.png' alt='Login' className='max-w-[1.5rem]'/>
      </div>
      { isHovered && <LoginHover /> }
    </div>
  )
}

export default ProfileBtn