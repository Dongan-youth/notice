import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../../../firebase_local";
import UserStore from "../../../../../Stores/UserStore";

const HoverCard = ({ isHovered, setIsHovered }) => {
  const { clearUser } = UserStore();
  const handleLogoutBtn = () => {
    signOut(auth)
      .then(() => {
        clearUser();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className="absolute top-16 right-6 w-40 h-36 p-3 bg-[#F6F6F9] rounded-xl shadow-md"
      onMouseLeave={() => setIsHovered({ ...isHovered, hoverCard: false })}
    >
      <div className="w-full h-full rounded-xl grid grid-rows-2 bg-white">
        <Link to="/mypage">
          <div className="h-16 flex flex-row items-center rounded-t-xl cursor-pointer hover:bg-gray-50">
            <img src="Mypage.png" alt="Mypage" className="w-auto h-8 px-3" />
            <span className="text-[#ABABAB] text-xm font-bold font-[Inter] px-2">
              MyPage
            </span>
          </div>
        </Link>
        <button
          onClick={handleLogoutBtn}
          className="h-16 flex flex-row items-center rounded-t-xl cursor-pointer hover:bg-gray-50"
        >
          <img src="LogIn.png" alt="Login" className="w-auto h-7 px-3" />
          <span className="text-[#ABABAB] text-xm font-bold font-[Inter] px-2">
            LogOut
          </span>
        </button>
      </div>
    </div>
  );
};

export default HoverCard;
