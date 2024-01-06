import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../Login/Logo";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";

const Join = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    getValues,
    setValue,
  } = useForm();
  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);

  const job = useRef();
  job.current = watch("job");

  const sex = useRef();
  sex.current = watch("sex");

  const password = useRef();
  password.current = watch("password");

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      console.log(data);

      setLoading(false);
    } catch (error) {
      // 회원가입 에러 발생 시 에러 문구 출력
      setErrorFromSubmit(error.message);

      // 에러 문구 5초 노출 후 사라짐
      setTimeout(() => {
        setErrorFromSubmit("");
      }, 5000);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-[25.5rem] h-[40.9375rem]">
      <Logo />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative flex flex-col justify-center items-center w-[19.9375rem] gap-[1.81rem]"
      >
        <TextField
          id="name"
          name="name"
          label="이름"
          variant="outlined"
          size="small"
          fullWidth
          {...register("name", { required: true, pattern: /^[가-힣]{2,5}$/ })}
        />
        <TextField
          id="email"
          name="email"
          label="이메일"
          variant="outlined"
          size="small"
          fullWidth
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <TextField
          id="password"
          name="password"
          type="password"
          label="비밀번호"
          variant="outlined"
          size="small"
          fullWidth
          {...register("password", { required: true, minLength: 6 })}
        />
        <TextField
          id="password-confirm"
          name="password-confirm"
          type="password"
          label="비밀번호 확인"
          variant="outlined"
          size="small"
          fullWidth
          {...register("password_confirm", {
            required: true,
            validate: (value) => value === password.current,
          })}
        />
        <TextField
          id="phone_number"
          name="phone_number"
          label="전화번호"
          variant="outlined"
          size="small"
          fullWidth
          {...register("phone_number", {
            required: true,
            pattern: /^(010|01[1|6|7|8|9])\d{3,4}\d{4}$/,
          })}
        />
        <div className="flex flex-row justify-center items-center w-full gap-[0.81rem]">
          <input className="hidden" {...register("job")}/>
          <div className="w-[9.5625rem]">
            {job.current === "teacher" ? (
              <Button variant="contained" fullWidth>
                교사
              </Button>
            ) : (
              <Button
                variant="outlined"
                fullWidth
                onClick={() => setValue("job", "teacher")}
              >
                교사
              </Button>
            )}
          </div>
          <div className="w-[9.5625rem]">
            {job.current === "student" ? (
              <Button variant="contained" fullWidth>
                학생
              </Button>
            ) : (
              <Button
                variant="outlined"
                fullWidth
                onClick={() => setValue("job", "student")}
              >
                학생
              </Button>
            )}
          </div>
        </div>
        <div className="flex flex-row justify-center items-center w-full gap-[0.81rem]">
        <input className="hidden" {...register("sex")}/>
          <div className="w-[9.5625rem]">
            {sex.current === "men" ? (
              <Button variant="contained" fullWidth>
                남
              </Button>
            ) : (
              <Button
                variant="outlined"
                fullWidth
                onClick={() => setValue("sex", "men")}
              >
                남
              </Button>
            )}
          </div>
          <div className="w-[9.5625rem]">
            {sex.current === "women" ? (
              <Button variant="contained" fullWidth>
                여
              </Button>
            ) : (
              <Button
                variant="outlined"
                fullWidth
                onClick={() => setValue("sex", "women")}
              >
                여
              </Button>
            )}
          </div>
        </div>
        <div className="absolute bottom-11 left-0 pl-1 text-sm font-medium text-red-500">
          {/* 이름 ErrorText */}
          {errors.name && errors.name.type === "required" && (
            <span>이름을 입력해주세요</span>
          )}
          {errors.name && errors.name.type === "pattern" && (
            <span>올바른 이름을 입력해주세요</span>
          )}
          {/* 이메일 ErrorText */}
          {!errors.name && errors.email && errors.email.type === "required" && (
            <span>이메일을 입력해주세요</span>
          )}
          {!errors.name && errors.email && errors.email.type === "pattern" && (
            <span>올바른 이메일을 입력해주세요</span>
          )}
          {/* 비밀번호 ErrorText */}
          {!errors.name &&
            !errors.email &&
            errors.password &&
            errors.password.type === "required" && (
              <span>비밀번호를 입력해주세요</span>
            )}
          {!errors.name &&
            !errors.email &&
            errors.password &&
            errors.password.type === "minLength" && (
              <span>비밀번호는 최소 6자 이상이어합니다</span>
            )}
          {/* 비밀번호 확인 ErrorText */}
          {!errors.name &&
            !errors.email &&
            !errors.password &&
            errors.password_confirm &&
            errors.password_confirm.type === "required" && (
              <span>비밀번호 확인을 입력해주세요</span>
            )}
          {!errors.name &&
            !errors.email &&
            !errors.password &&
            errors.password_confirm &&
            errors.password_confirm.type === "validate" && (
              <span>비밀번호가 다르니 다시 입력해주세요</span>
            )}
          {/* 전화번호 ErrorText */}
          {!errors.name &&
            !errors.email &&
            !errors.password &&
            !errors.password_confirm &&
            errors.phone_number &&
            errors.phone_number.type === "required" && (
              <span>전화번호를 입력해주세요</span>
            )}
          {!errors.name &&
            !errors.email &&
            !errors.password &&
            !errors.password_confirm &&
            errors.phone_number &&
            errors.phone_number.type === "pattern" && (
              <span>올바른 전화번호를 입력해주세요</span>
            )}
          {/* 직업 ErrorText */}
          {!errors.name &&
            !errors.email &&
            !errors.password &&
            !errors.password_confirm &&
            !errors.phone_number &&
            job.current === '' && <span>직업을 선택해주세요</span>}
          {/* 성별 ErrorText */}
          {!errors.name &&
            !errors.email &&
            !errors.password &&
            !errors.password_confirm &&
            !errors.phone_number &&
            !errors.job &&
            sex.current === '' && <span>성별을 선택해주세요</span>}
          {errorFromSubmit && <span>{errorFromSubmit}</span>}
        </div>
        <button
          className="w-[19.9375rem] h-[2.5625rem] bg-[#7D8DA7] rounded-[0.4375rem]"
          onClick={handleSubmit}
          disabled={loading}
        >
          <span className="text-[#FFFFFF] text-[1.25rem] font-bold font-[Inter]">
            Join
          </span>
        </button>
      </form>
      <div className="flex flex-row w-[15.1875rem] gap-[0.25rem] mt-[0.81rem]">
        <span className="text-[#6D7A8F] text-[0.9375rem] font-normal font-[Inter]">
          이미 아이디가 있다면...
        </span>
        <Link
          to={"/"}
          className="text-[#6D7A8F] text-[0.9375rem] font-bold font-[Inter]"
        >
          로그인하러가기
        </Link>
      </div>
    </div>
  );
};

export default Join;
