import React from 'react'
import Menu from './Menu.js'

const MenuList = () => {
  const menuData = [
    { imageURL: 'Menu1.png', text: '온라인 주보' },
    { imageURL: 'Menu2.png', text: '사진 및 동영상' }
  ];

  return (
    <div className='flex flex-col justify-center items-center w-[14.5rem] h-[8.5rem] px-3'>
      <Menu MenuImageURL={menuData[0].imageURL} MenuName={menuData[0].text}/>
      <Menu MenuImageURL={menuData[1].imageURL} MenuName={menuData[1].text}/>
    </div>
  )
}

export default MenuList