import React from "react";
import Login from "../../Components/PC/Login/Login.js";

const LoginP = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F6F6F9] p-3">
      <div className="w-full h-full flex-grow flex justify-center items-center bg-white rounded-2xl">
        <Login />
      </div>
    </div>
  );
};

export default LoginP;
