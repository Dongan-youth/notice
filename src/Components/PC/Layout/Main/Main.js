import React from "react";
import Header from "./Header/Header.js";

const Main = ({ children }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full pl-72 pr-3 py-3">
      <div className="w-full h-full flex flex-col bg-white rounded-2xl">
        <Header />
        <div className="w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Main;
