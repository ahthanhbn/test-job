import React from "react";

function HeaderSearch() {
  return (
    <div className="flex gap-8 items-center">
      <div className="w-[350px] py-[10px] pl-5 bg-white rounded border border-[#828282]">
        <input
          className=" w-full text-[#c4c4c4] text-sm font-semibold outline-none"
          type="text"
          name=""
          id=""
          placeholder="Tên, SDT, Email"
        />
      </div>
      <button className="w-9 h-9 ">
        <img className="w-full h-full" src="/filler.png" alt="" />
      </button>
    </div>
  );
}

export default HeaderSearch;
