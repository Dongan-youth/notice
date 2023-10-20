import React, { useState } from 'react';

const Menu = ({ MenuImageURL, MenuName }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle ={
    backgroundColor: isHovered ? '#F6F6F9' : '',
    borderColor: isHovered ? '#CACAD0' : '',
    border: isHovered ? '1.5px solid' : '',
    borderRounded: isHovered ? '[0.75rem]' : ''
  };
  
  return (
    <button className='flex justify-center items-center w-[13.75rem] h-[3.5625rem] rounded-xl m-1' style={ buttonStyle } onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className='flex justify-start items-center w-[12.25rem] h-[2.3125rem] px-3 py-[0.63rem]'>
          <div className='flex float-left pr-5'>
            <img src={MenuImageURL} alt="Menu"></img>
          </div>
          <div className='flex text-center justify-center items-center'>
            <p className=' text-[#7D8DA7] text-lg font-bold font-[Inter] leading-[2.3125rem]'>{MenuName}</p>
          </div>
        </div>
    </button>
  )
}

export default Menu