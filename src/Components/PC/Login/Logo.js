import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to={'/'} className='flex justify-center items-center w-[14.4375rem] h-[6.1875rem] p-[0.62rem]'>
        <img src='Youth2_logo.png' alt='Logo' className='w-full h-[2.94rem]'></img>
    </Link>
  )
}

export default Logo