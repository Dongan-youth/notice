import React from "react";
import Header from "../Header/Header.js";

const Main = ({ children }) => {
  return (
    <div className="w-full h-screen pl-[15%] py-3 pr-3 ">
      <div className="w-full h-full rounded-2xl bg-white">
        <Header />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Main;
