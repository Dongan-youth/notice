import React from "react";
import { useTheme } from "next-themes";

const ModeBtn = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="col-start-8 flex items-center justify-center">
      <div className="bg-[#F6F6F9] rounded-xl p-2">
        <div className="grid grid-cols-2 rounded-xl bg-[#C6CCD8]">
          {theme === "light" ? (
            <div
              className="flex justify-center items-center p-2 bg-white rounded-xl cursor-pointer"
              onClick={() => setTheme("light")}
            >
              <img
                src="LightIcon.png"
                alt="LightMode"
                className="w-7 h-7"
              ></img>
            </div>
          ) : (
            <div
              className="flex justify-center items-center p-2 bg-none rounded-xl cursor-pointer"
              onClick={() => setTheme("light")}
            >
              <img
                src="LightIcon.png"
                alt="LightMode"
                className="w-7 h-7"
              ></img>
            </div>
          )}
          {theme === "dark" ? (
            <div
              className="flex justify-center items-center p-2 bg-white rounded-xl cursor-pointer"
              onClick={() => setTheme("dark")}
            >
              <img src="DarkIcon.png" alt="DarkMode" className="w-7 h-7"></img>
            </div>
          ) : (
            <div
              className="flex justify-center items-center p-2 bg-none rounded-xl cursor-pointer"
              onClick={() => setTheme("dark")}
            >
              <img src="DarkIcon.png" alt="DarkMode" className="w-7 h-7"></img>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModeBtn;
