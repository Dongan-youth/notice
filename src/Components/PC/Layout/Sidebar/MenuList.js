import React from "react";
import Menu from "./Menu.js";

const MenuList = () => {
  const menuData = [
    { id: "/online-notice", imageURL: "Menu1.png", text: "온라인 주보" },
    { id: "/photos-and-videos", imageURL: "Menu2.png", text: "사진 및 동영상" },
  ];

  return (
    <div className="row-span-2 grid grid-rows-2 gap-3 my-3">
      <Menu
        PageUrl={menuData[0].id}
        MenuImageURL={menuData[0].imageURL}
        MenuName={menuData[0].text}
      />
      <Menu
        PageUrl={menuData[1].id}
        MenuImageURL={menuData[1].imageURL}
        MenuName={menuData[1].text}
      />
    </div>
  );
};

export default MenuList;
