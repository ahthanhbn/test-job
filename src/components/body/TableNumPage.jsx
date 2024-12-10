import React from "react";
import PageNum from "./PageNum";

function TableNumPage() {
  return (
    <div className="flex justify-center items-center gap-[10px]">
      <div className="px-[15px] py-2.5  bg-white rounded-[39px] border border-[#d9d9d9]">
        <select className=" justify-center items-center gap-2.5 inline-flex">
          <option value="">20/trang</option>
        </select>
      </div>
      <PageNum />
    </div>
  );
}

export default TableNumPage;
