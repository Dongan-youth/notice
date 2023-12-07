import React, { useState } from "react";
import Logo from "./Logo";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    id: "",
    pw: "",
  });

  const handleSubmit = () => {
    console.log(loginData);
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 w-80">
      <Logo />
      <TextField
        id="outlined-basic"
        name="email"
        label="email"
        variant="outlined"
        size="small"
        fullWidth
        value={loginData.id}
        onChange={(e) => setLoginData({ ...loginData, id: e.target.value })}
      />
      <TextField
        id="outlined-basic"
        name="password"
        type="password"
        label="password"
        variant="outlined"
        size="small"
        fullWidth
        value={loginData.pw}
        onChange={(e) => setLoginData({ ...loginData, pw: e.target.value })}
      />
      <div className="flex flex-row justify-center items-center gap-2 text-[#6D7A8F] text-[0.9375rem]">
        <Link to={"/"} className="font-bold">
          아이디찾기
        </Link>
        <p>│</p>
        <Link to={"/"} className="font-bold">
          비밀번호찾기
        </Link>
        <p>│</p>
        <Link to={"/join"} className="font-bold">
          회원가입
        </Link>
      </div>
      <button
        className="w-full h-10 bg-[#7D8DA7] rounded-md"
        onClick={handleSubmit}
      >
        <span className="text-[#FFFFFF] text-xl font-bold font-[Inter]">
          LogIn
        </span>
      </button>
    </div>
  );
};

export default Login;
