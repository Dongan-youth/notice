import React from 'react';
import Logo from './Logo';
import MenuList from './MenuList';

const Sidebar = () => {
  return (
    <div className='grid grid-rows-[repeat(10,minmax(0,1fr))] gap-3 rounded-2xl px-3 bg-white'>
      <Logo />
      <MenuList />
    </div>
  );
};

export default Sidebar;