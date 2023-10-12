import React from 'react';
import Logo from './Logo';
import MenuList from './MenuList';

const Sidebar = () => {
  return (
    <div className='absolute h-screen w-[17.5rem] p-3'>
        <div className='w-full h-full rounded-2xl bg-white flex flex-col items-center justify-start'>
            <Logo />
            <MenuList/>
        </div>
    </div>
  );
};

export default Sidebar;