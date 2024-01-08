import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/main"}>
      <img
        src="Youth2_logo.png"
        alt="Youth2 logo"
        className="w-auto h-12 mx-auto"
      />
    </Link>
  );
};

export default Logo;
