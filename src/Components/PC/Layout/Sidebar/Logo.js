import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to={'/main'} className='flex items-center border-b border-stone-300'>
      <img src="Youth2_logo.png" alt="Youth2 logo"></img>
    </Link>
  )
}

export default Logo