import React, { useState } from "react";
import Logo from "./Logo";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase_local";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      // Firedase Login
      await signInWithEmailAndPassword(auth, data.email, data.password);

      setLoading(false);
    } catch (error) {
      // 로그인 에러 발생 시 에러 문구 출력
      setErrorFromSubmit(error.message);

      // 에러 문구 5초 노출 후 사라짐
      setTimeout(() => {
        setErrorFromSubmit("");
      }, 5000);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-[25.5rem] h-[25.1875rem] gap-3">
      <Logo />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative flex flex-col justify-center items-center w-[19.9375rem] gap-[1.81rem]"
      >
        <TextField
          id="email"
          name="email"
          label="email"
          variant="outlined"
          size="small"
          fullWidth
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <TextField
          id="password"
          name="password"
          type="password"
          label="password"
          variant="outlined"
          size="small"
          fullWidth
          {...register("password", { required: true, minLength: 6 })}
        />
        <div className="absolute bottom-11 left-0 pl-1 text-sm font-medium text-red-500">
          {errors.email && errors.email.type === "required" && (
            <span>이메일을 입력해주세요</span>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <span>올바른 이메일을 입력해주세요</span>
          )}
          {!errors.email &&
            errors.password &&
            errors.password.type === "required" && (
              <span>비밀번호를 입력해주세요</span>
            )}
          {!errors.email &&
            errors.password &&
            errors.password.type === "minLength" && (
              <span>올바른 비밀번호를 입력해주세요</span>
            )}
           {errorFromSubmit && <span>{errorFromSubmit}</span>} 
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
      </form>
      <div className="flex flex-row justify-center items-center gap-2 my-2 text-[#6D7A8F] text-[0.9375rem]">
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
    </div>
  );
};

export default Login;
