import React from "react";

const ModeBtn = () => {
  return (
    <div className="col-start-8 flex items-center justify-center">
      <div className="grid grid-cols-2 bg-[#F6F6F9] rounded-xl p-2">
        <div className="flex justify-center items-center p-2 bg-[#FFFFFF] rounded-l-xl">
          <img src="LightIcon.png" alt="LightMode" className="w-7 h-7"></img>
        </div>
        <div className="flex justify-center items-center p-2 bg-[#C6CCD8] rounded-r-xl">
          <img src="DarkIcon.png" alt="DarkMode" className="w-7 h-7"></img>
        </div>
      </div>
    </div>
  );
};

export default ModeBtn;
