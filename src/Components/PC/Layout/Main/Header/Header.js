import React from "react";
import ModeBtn from "./ModeBtn.js";
import ProfileBtn from "./ProfileBtn.js";

const Header = () => {
  return (
    <div className="w-full h-[4.5rem] flex flex-row justify-end border-b border-stone-300">
      <ProfileBtn />
      {/* <ModeBtn />
      <ProfileBtn /> */}
    </div>
  );
};

export default Header;
