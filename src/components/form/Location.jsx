import React, { useState } from "react";

function Location({ tinh , huyen , getHuyen}) {
 

  return (
    <div className="flex flex-col items-start justify-start gap-3">
      <label className=" text-[#8f8f8f] text-xs font-normal" htmlFor="care">
        Địa chỉ liên hệ
      </label>
      <select
        className="outline-none w-[304px] px-2 pl-[18px] h-9 bg-[#edf9f6] rounded border border-[#dbdbdb] text-[#8f8f8f] text-sm font-normal font-['Open Sans'] leading-tight"
        name=""
        id=""
        onChange={() => {getHuyen(e.target.value)}}
      >
        {valueTinh ? <option value="">{valueTinh}</option> : <option value="-- Chọn Tỉnh --"></option>}
        {tinh.map((e) => {
          return e.name ? (
            <option key={e.code} value={e.code}>
              {e.name}
            </option>
          ) : null;
        })}
      </select>
      <select
        className="outline-none w-[304px] px-2 pl-[18px] h-9 bg-[#edf9f6] rounded border border-[#dbdbdb] text-[#8f8f8f] text-sm font-normal font-['Open Sans'] leading-tight"
        name=""
        id=""
      >
        <option value="">-- Chọn Huyện -- </option>
        {huyen.map((e) => {
          return e.name ? (
            <option key={e.code} value={e.code}>
              {e.name}
            </option>
          ) : null;
        })}
      </select>
      <select
        className="outline-none w-[304px] px-2 pl-[18px] h-9 bg-[#edf9f6] rounded border border-[#dbdbdb] text-[#8f8f8f] text-sm font-normal font-['Open Sans'] leading-tight"
        name=""
        id=""
      >
        <option value="">-- Chọn Quận --</option>
      </select>
      <input
        className=" outline-none w-[304px] px-2 pl-[18px] h-9 bg-[#edf9f6] rounded border border-[#dbdbdb] text-[#8f8f8f] text-sm font-normal font-['Open Sans'] leading-tight"
        type="text"
        name="number"
        id="number"
      />
    </div>
  );
}

export default Location;
