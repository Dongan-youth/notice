import React from "react";
import ModeBtn from "./ModeBtn.js";
import ProfileBtn from "./ProfileBtn.js";

const Header = () => {
  return (
    <div className="grid grid-cols-9 gap-3 border-b border-stone-300">
      <ModeBtn />
      <ProfileBtn />
    </div>
  );
};

export default Header;
