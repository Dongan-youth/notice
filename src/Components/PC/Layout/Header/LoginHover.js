import React from "react";

const LoginHover = () => {
  return (
    <div className="absolute top-16 right-7 w-36 h-36 p-3 bg-[#F6F6F9] rounded-xl shadow-md">
      <div className="w-full h-full rounded-xl grid grid-rows-2 bg-white">
        <div className="flex gap-3 p-3 items-center rounded-t-xl cursor-pointer hover:bg-gray-50">
          <img src="Mypage.png" alt="Mypage" className="w-6" />
          <span className="col-span-3 text-[#ABABAB] text-xm font-bold font-[Inter]">
            MyPage
          </span>
        </div>
        <div className="flex gap-3 p-3 items-center rounded-b-xl cursor-pointer hover:bg-gray-50">
          <img src="LogIn.png" alt="Login" className="w-6" />
          <span className="col-span-3 text-[#ABABAB] text-xm font-bold font-[Inter]">
            LogOut
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginHover;
