import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"} className="flex justify-center items-center">
      <img src="Youth2_logo.png" alt="Logo" className="w-full h-11"></img>
    </Link>
  );
};

export default Logo;
