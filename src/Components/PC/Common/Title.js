import React from 'react'

const Title = ({ title }) => {
  return (
    <div className='flex justify-start items-start mt-[1.81rem] ml-[1.75rem]'>
        <p className='text-[#5C697D] text-[1.7rem] font-bold font-[Inter]'>{title}</p>
    </div>
  )
}

export default Title