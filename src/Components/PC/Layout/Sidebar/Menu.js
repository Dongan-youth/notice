import React from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = ({ MenuImageURL, MenuName, PageUrl }) => {
  const location = useLocation();

  return (
    <>
      {PageUrl === location.pathname ? (
        <Link
          to={PageUrl}
          className="grid grid-cols-4 gap-3 p-3 items-center rounded-xl bg-[#F6F6F9] border-[#CACAD0] border-2 border-solid"
        >
          <img src={MenuImageURL} alt="Menu" className="w-7" />
          <span className="col-span-3 text-[#7D8DA7] text-lg text-center font-semibold font-[Inter]">
            {MenuName}
          </span>
        </Link>
      ) : (
        <Link
          to={PageUrl}
          className="grid grid-cols-4 gap-3 p-3 items-center rounded-xl border-2 border-white hover:bg-[#F6F6F9] hover:border-[#CACAD0] hover:border-2 hover:border-solid"
        >
          <img src={MenuImageURL} alt="Menu" className="w-7" />
          <span className="col-span-3 text-[#7D8DA7] text-lg text-center font-semibold font-[Inter]">
            {MenuName}
          </span>
        </Link>
      )}
    </>
  );
};

export default Menu;
