import React from 'react';
import Logo from './Logo';
import MenuList from './MenuList';

const Sidebar = () => {
  return (
    <div className='absolute left-0 top-0 min-h-screen h-full w-[15%] p-3'>
        <div className='w-full h-full rounded-2xl bg-white flex flex-col items-center justify-start gap-[2.5vh]'>
            <Logo />
            <MenuList/>
        </div>
    </div>
  );
};

export default Sidebar;