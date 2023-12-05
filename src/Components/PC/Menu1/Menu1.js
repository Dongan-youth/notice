import React from 'react'
import Title from '../Common/Title'
import NoticeTable from '../Menu1/NoticeTable'

const Menu = () => {
  return (
    <div className='flex flex-col w-full h-full gap-[0.75rem]'>
      <Title title={"온라인 주보"}/>
      <NoticeTable/>
    </div>
  )
}

export default Menu