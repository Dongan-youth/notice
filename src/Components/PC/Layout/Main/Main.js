import React from "react";
import Header from "../Header/Header.js";

const Main = ({ children }) => {
  return (
    <div className="grid grid-rows-[repeat(10,minmax(0,1fr))] gap-3 bg-white col-span-5 rounded-2xl">
      <Header />
      <div className="row-[span_9_/_span_9]">
        { children }
      </div>
    </div>
  );
};

export default Main;
