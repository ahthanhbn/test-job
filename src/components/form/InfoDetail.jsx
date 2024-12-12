import React from "react";
import Location from "./Location";

function InfoDetail({tinh, huyen, getHuyen}) {
  return (
    <div className="flex justify-between items-start">
      <div className="flex flex-col items-start">
        <h2 className="pb-3 text-black text-base font-semibold font-['Open Sans'] leading-tight">
          Thông tin chi tiết
        </h2>
        <div className="flex flex-col items-start gap-1">
          <label className=" text-[#8f8f8f] text-xs font-normal" htmlFor="care">
            Sản phẩm quan tâm
            <span className="text-[#da5353] text-xs font-normal">*</span>
          </label>
          <input
            className="outline-none w-[346px] px-2 pl-[18px] h-[72px] bg-[#edf9f6] rounded border border-[#dbdbdb] text-[#181a22] text-sm font-normal leading-tight"
            name=""
            id="care"
          />
        </div>
        <div className="flex flex-col items-start gap-1 pt-[10px]">
          <label className=" text-[#8f8f8f] text-xs font-normal" htmlFor="care">
            Ghi chú
            <span className="text-[#da5353] text-xs font-normal">*</span>
          </label>
          <input
            className="outline-none w-[346px] px-2 pl-[18px] h-[47px] bg-[#edf9f6] rounded border border-[#dbdbdb] text-[#181a22] text-sm font-normal leading-tight"
            name=""
            id="care"
          />
        </div>
      </div>
      <Location tinh = {tinh} huyen={huyen} getHuyen ={getHuyen}/>
    </div>
  );
}

export default InfoDetail;
