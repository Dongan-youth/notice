import React from "react";
import Header from "./Header/Header.js";

const Main = ({ children }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full pl-72 pr-3 py-3">
      <div className="relative w-full h-full bg-white rounded-2xl">
        <Header />
        <div className="absolute top-0 left-0 pt-[4.5rem] w-full h-full">{children}</div>
      </div>
    </div>
  );
};

export default Main;
