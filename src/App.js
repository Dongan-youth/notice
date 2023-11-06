import React, { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// 임시 파일 이름 추후 회의 후 결정
import MainPageP from './Pages/PC/MainPageP'
import MainPageM from './Pages/Mobile/MainPageM'

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
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
