import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import UserStore from "./Stores/UserStore";
import { auth } from "./firebase_local";
import { onAuthStateChanged } from "firebase/auth";

// 임시 파일 이름 추후 회의 후 결정
import MainPageP from "./Pages/PC/MainPageP";
import LoginP from "./Pages/PC/LoginP";
import JoinP from "./Pages/PC/JoinP";
import MyPageP from "./Pages/PC/MyPageP";
import Menu1P from "./Pages/PC/Menu1P";
import Menu2P from "./Pages/PC/Menu2P";

function App() {
  const navigate = useNavigate();
  const { user , setUser, clearUser} = UserStore();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/main");

        // 로그인한 사용자 정보를 global state에 저장
        setUser(user);
      }
      else {
        navigate("/");

        // 로그인 시 저장했던 사용자 정보 삭제
        clearUser();
      }
    });
  }, []);

  if (user.isLoading) {
    return <div>...Loading</div>
  } else {
    return (
        <Routes>
          <Route path="/" element={<LoginP />} />
          <Route path="/join" element={<JoinP />} />
          <Route path="/main" element={<MainPageP />} />
          <Route path="/mypage" element={<MyPageP />} />
          <Route path="/online-notice" element={<Menu1P />} />
          <Route path="/photos-and-videos" element={<Menu2P />} />
        </Routes>
    );
  }
}

export default App;
