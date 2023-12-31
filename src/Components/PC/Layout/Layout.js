import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';

const Layout = ({ children }) => {
  return (
    <div className='w-full min-h-screen grid grid-cols-6 gap-3 p-3 bg-[#F6F6F9]'>
      <Sidebar/>
      <Main>
        {children}
      </Main>
    </div>
  )
}

export default Layout