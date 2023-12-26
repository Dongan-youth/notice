import React from "react";
import { Link } from "react-router-dom";

const HoverCard = ({ isHovered, setIsHovered }) => {
  return (
    <div
      className="absolute top-16 right-7 w-36 h-36 p-3 bg-[#F6F6F9] rounded-xl shadow-md"
      onMouseLeave={() => setIsHovered({...isHovered, hoverCard: false })}
    >
      <div className="w-full h-full rounded-xl grid grid-rows-2 bg-white">
        <Link  className="flex gap-3 p-3 items-center rounded-t-xl cursor-pointer hover:bg-gray-50">
          <img src="Mypage.png" alt="Mypage" className="w-6" />
          <span className="col-span-3 text-[#ABABAB] text-xm font-bold font-[Inter]">
            MyPage
          </span>
        </Link>
        <Link className="flex gap-3 p-3 items-center rounded-b-xl cursor-pointer hover:bg-gray-50">
          <img src="LogIn.png" alt="Login" className="w-6" />
          <span className="col-span-3 text-[#ABABAB] text-xm font-bold font-[Inter]">
            LogOut
          </span>
        </Link>
      </div>
    </div>
  );
};

export default HoverCard;
