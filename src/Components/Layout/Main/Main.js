import React from 'react';

const Main = ({ children }) => {
  return (
    <div className='w-full h-screen pl-[17.5rem] py-3 pr-3 '>
      <div className='w-full h-full rounded-2xl bg-white'>
        { children }
      </div>
    </div>
  );
};

export default Main;
