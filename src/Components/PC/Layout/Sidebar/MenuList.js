import React from 'react'
import Menu from './Menu.js'

const MenuList = () => {
  const menuData = [
    { imageURL: 'Menu1.png', text: '온라인 주보' , to: '/online-notice'},
    { imageURL: 'Menu2.png', text: '사진 및 동영상', to: '/photos-and-videos'}
  ];

  return (
    <div className='row-span-2 grid grid-rows-2 gap-3 my-3'>
      <Menu MenuImageURL={menuData[0].imageURL} MenuName={menuData[0].text} toMenu={menuData[0].to}/>
      <Menu MenuImageURL={menuData[1].imageURL} MenuName={menuData[1].text} toMenu={menuData[1].to}/>
    </div>
  )
}

export default MenuList