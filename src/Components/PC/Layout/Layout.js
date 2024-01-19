import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';

const Layout = ({ children }) => {
  return (
    <div className='w-full h-full min-h-screen'>
      <Sidebar/>
      <Main>
        {children}
      </Main>
    </div>
  )
}

export default Layout