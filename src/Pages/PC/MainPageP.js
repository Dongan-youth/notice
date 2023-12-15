import React from 'react'
import LayOut from '../../Components/PC/Layout/Layout'

import { signOut } from 'firebase/auth'
import { auth } from './../../firebase_local'
import UserStore from '../../Stores/UserStore'

const MainPageP = () => {
  const { clearUser, user } = UserStore();
  const handleBtn = () => {
    signOut(auth).then(() => {
      clearUser();
      console.log('로그아웃 됨')
      console.log(user)
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <LayOut><button onClick={handleBtn}>로그아웃</button></LayOut>
  )
}

export default MainPageP