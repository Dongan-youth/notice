import React from 'react'

const Title = ({ title }) => {
  return (
    <div className='w-full flex justify-start mb-6'>
        <p className='text-[#5C697D] text-3xl font-bold font-[Inter]'>{title}</p>
    </div>
  )
}

export default Title