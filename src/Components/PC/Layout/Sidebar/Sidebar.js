import React from "react";
import Logo from "./Logo";
import MenuList from "./MenuList";

const Sidebar = () => {
  return (
    <div className="absolute top-0 left-0 p-3 w-72 h-full min-h-screen z-10">
      <div className="bg-white w-full h-full flex flex-col overflow-y-auto py-4 px-3 rounded-2xl">
        <Logo />
        <MenuList />
      </div>
    </div>
  );
};

export default Sidebar;
