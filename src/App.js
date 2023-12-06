import React, { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// 임시 파일 이름 추후 회의 후 결정
import MainPageP from './Pages/PC/MainPageP'
import MainPageM from './Pages/Mobile/MainPageM'
import LoginP from "./Pages/PC/LoginP"
import JoinP from "./Pages/PC/JoinP";
import MyPageP from "./Pages/PC/MyPageP";
import Menu1P from "./Pages/PC/Menu1P";
import Menu2P from "./Pages/PC/Menu2P";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if(isMobile){
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPageM/>} />
        </Routes>
      </BrowserRouter>
    )
  }else{
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPageP/>} />
          <Route path="/login" element={<LoginP/>} />
          <Route path="/join" element={<JoinP/>} />
          <Route path="/mypage" element={<MyPageP/>}/>
          <Route path="/online-notice" element={<Menu1P/>}/>
          <Route path="/photos-and-videos" element={<Menu2P/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
