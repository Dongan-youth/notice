import React, { useState } from "react";
import Logo from "./Logo";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase_local";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [formError, setFormError] = useState({
    loginerror: "",
    emailError: "",
    passwordError: "",
  });
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    try {
      setLoading(true);

      // Firedase Login
      await signInWithEmailAndPassword(
        auth,
        loginData.email,
        loginData.password
      );

      setLoading(false);
    } catch (error) {
      setFormError({ ...formError, loginerror: error });

      setTimeout(() => {
        setFormError({
          loginerror: "",
          emailError: "",
          passwordError: "",
        });
      }, 5000);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-[25.5rem] h-[25.1875rem] gap-3">
      <Logo />
      <div className="flex flex-col justify-center items-center w-[19.9375rem] gap-[1.81rem]">
        <TextField
          id="email"
          name="email"
          label="email"
          variant="outlined"
          size="small"
          fullWidth
          value={loginData.id}
          onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
        />
        <TextField
          id="password"
          name="password"
          type="password"
          label="password"
          variant="outlined"
          size="small"
          fullWidth
          value={loginData.pw}
          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
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
          className="w-[19.9375rem] h-[2.5625rem] bg-[#7D8DA7] rounded-[0.4375rem]"
          onClick={handleSubmit}
          disabled={loading}
        >
          <span className="text-[#FFFFFF] text-xl font-bold font-[Inter]">
            LogIn
          </span>
        </button>
      </div>
    </div>
  );
};

export default Login;
