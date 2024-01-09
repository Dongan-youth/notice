import React from "react";
import Title from "../Common/Title";
import NoticeTable from "../Menu1/NoticeTable";

const Menu = () => {
  return (
    <div className="w-full h-full">
      <div className="max-w-6xl w-full min-h-full flex flex-col p-6 mx-auto">
        <Title title={"온라인 주보"} />
        <NoticeTable />
      </div>
    </div>
  );
};

export default Menu;
