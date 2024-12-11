import React from "react";

function ContactInfo() {
  return (
    <div className="flex flex-col justify-between  pt-5 border-t-[1px] border-[#dbdbdb ]">
      <div className="flex flex-col items-start">
        <h2 className="pb-2 text-black text-base font-semibold font-['Open Sans'] leading-tight">Thông tin liên hệ</h2>
        <div className="flex gap-[100px]">
          <div className="relative  flex flex-col justify-start items-start gap-1">
            <label
              className=" text-[#8f8f8f] text-xs font-normal"
              htmlFor="number"
            >
              Số điện thoại
              <span className="text-[#da5353] text-xs font-normal">*</span>
            </label>
            <input
              className=" outline-none w-[346px] px-2 pl-[18px] h-9 bg-[#edf9f6] rounded border border-[#dbdbdb] text-[#181a22] text-sm font-normal font-['Open Sans'] leading-tight"
              type="text"
              name="number"
              id="number"
            />
            <span className="absolute right-2 bottom-[10px] text-center text-[#8f8f8f] text-[10px] font-normal font-['Open Sans'] leading-tight">
              0/10
            </span>
          </div>
          <div className=" flex flex-col justify-start items-start gap-1">
            <label
              className=" text-[#8f8f8f] text-xs font-normal"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className=" outline-none w-[346px] px-2 pl-[18px] h-9 bg-[#edf9f6] rounded border border-[#dbdbdb] text-[#181a22] text-sm font-normal font-['Open Sans'] leading-tight"
              type="text"
              name="email"
              id="email"
            />
          </div>
          <div className="relative flex flex-col justify-start items-start gap-1">
            <label
              className=" text-[#8f8f8f] text-xs font-normal"
              htmlFor="number"
            >
              Mạng xã hội
            </label>
            <div className="flex gap-6">
              <select
                className=" outline-none px-2 h-9 bg-[#edf9f6] rounded border border-[#dbdbdb] text-[#181a22] text-sm font-normal font-['Open Sans'] leading-tight"
                type="text"
                name="number"
                id="number"
              >
                <option value=""></option>
                <option value="Website">Website</option>
                <option value="Facebook">Facebook</option>
                <option value="Tiktok">Tiktok</option>
              </select>
              <input
                className="outline-none text-ellipsis w-[210px] px-2 h-9 bg-[#edf9f6] rounded border border-[#dbdbdb] text-[#181a22] text-sm font-normal font-['Open Sans'] leading-tight"
                type="text"
                name="email"
                id="email"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
