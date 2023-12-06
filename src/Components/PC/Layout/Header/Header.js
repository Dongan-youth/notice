import React from 'react';
import ModeBtn from './ModeBtn.js';
import ProfileBtn from './ProfileBtn.js';


const Header = () => {
  return (
    <div className='flex justify-end items-center h-[6.25rem] w-full border-b-[1px] border-[#D2D2D2]'>
        <ModeBtn />
        <ProfileBtn />
    </div>
  );
};

export default Header;
