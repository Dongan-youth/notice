import React from 'react';

const Menu = ({ MenuImageURL, MenuName }) => {

  return (
        <button className='flex justify-center items-center w-full h-[7vh] rounded-xl hover:bg-[#F6F6F9] hover:border-[#CACAD0] hover:border hover:border-solid'>
        <div className='flex justify-start items-center w-full h-full px-3 py-[0.63rem]'>
          <div className='flex float-left pr-5'>
            <img src={MenuImageURL} alt="Menu" className='w-[1.5vw]'></img>
          </div>
          <div className='flex text-center justify-center items-center'>
            <p className=' text-[#7D8DA7] text-xm font-bold font-[Inter] leading-[2.3125rem]'>{MenuName}</p>
          </div>
        </div>
    </button>
  )
}

export default Menu