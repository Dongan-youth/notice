import React, { useState } from 'react'
import HoverCard from './HoverCard';

const ProfileBtn = () => {
  const [ isHovered, setIsHovered ] = useState({
    profile: false,
    hoverCard: false
  });
  
  const handleMouseEnter = () => {
    setIsHovered({
      ...isHovered,
      profile: true,
      hoverCard: true
    });
  };

  return (
    <div className='relative flex justify-center items-center'>
      <div
        className='aspect-square w-full max-w-[3.25rem] flex justify-center items-center rounded-full border-2 border-[#D2D2D2] cursor-pointer'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsHovered({...isHovered, profile: false})}
      >
        <img src='LoginImage.png' alt='Login' className='max-w-[1.5rem]'/>
      </div>
      { (isHovered.profile || isHovered.hoverCard) && <HoverCard isHovered={isHovered} setIsHovered={setIsHovered} /> }
    </div>
  )
}

export default ProfileBtn