import React from "react";
import { useTheme } from "next-themes";

const ModeBtn = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center justify-center">
      <div className="w-24 h-14 p-2 bg-[#F6F6F9] rounded-xl">
        <div className="w-full h-full flex rounded-lg bg-[#C6CCD8]">
          {theme === "light" ? (
            <div
              className="w-10 h-10 flex justify-center items-center bg-white rounded-lg cursor-pointer"
              onClick={() => setTheme("light")}
            >
              <img
                src="LightIcon.png"
                alt="LightMode"
                className="w-auto h-7"
              ></img>
            </div>
          ) : (
            <div
              className="w-10 h-10 flex justify-center items-center bg-none rounded-lg cursor-pointer"
              onClick={() => setTheme("light")}
            >
              <img
                src="LightIcon.png"
                alt="LightMode"
                className="w-auto h-7"
              ></img>
            </div>
          )}
          {theme === "dark" ? (
            <div
              className="w-10 h-10 flex justify-center items-center bg-white rounded-lg cursor-pointer"
              onClick={() => setTheme("dark")}
            >
              <img
                src="DarkIcon.png"
                alt="DarkMode"
                className="w-auto h-6"
              ></img>
            </div>
          ) : (
            <div
              className="w-10 h-10 flex justify-center items-center p-2 bg-none rounded-lg cursor-pointer"
              onClick={() => setTheme("dark")}
            >
              <img
                src="DarkIcon.png"
                alt="DarkMode"
                className="w-auto h-6"
              ></img>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModeBtn;
