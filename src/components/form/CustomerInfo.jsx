import React from "react";

function CustomerInfo() {
  return (
    <div className="flex justify-between items-start">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-start gap-[4px]">
          <label className=" text-[#8f8f8f] text-xs font-normal" htmlFor="name">
            Họ tên khách hàng
            <span className="text-[#da5353] text-xs font-normal">*</span>
          </label>
          <input
            className="outline-none w-[363px] px-2 pl-[18px] h-9 bg-[#edf9f6] rounded border border-[#dbdbdb] text-[#181a22] text-sm font-normal font-['Open Sans'] leading-tight"
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div className="flex gap-[24px] ">
          <div className="flex flex-col items-start gap-[4px]">
            <label
              className=" text-[#8f8f8f] text-xs font-normal"
              htmlFor="nguon"
            >
              Nguồn khách hàng
              <span className="text-[#da5353] text-xs font-normal">*</span>
            </label>
            <select
              className=" outline-none w-[170px] px-2  h-9 bg-[#edf9f6] rounded border border-[#dbdbdb] text-[#181a22] text-sm font-normal font-['Open Sans'] leading-tight"
              name="nguon"
              id="nguon"
            >
              <option value="Website">Website</option>
              <option value="Facebook">Facebook</option>
              <option value="Tiktok">Tiktok</option>
            </select>
          </div>
          <div className="flex flex-col items-start gap-[4px]">
            <label
              className=" text-[#8f8f8f] text-xs font-normal"
              htmlFor="status"
            >
              Trạng thái
              <span className="text-[#da5353] text-xs font-normal">*</span>
            </label>
            <select
              className="outline-none w-[170px] px-[10px]  h-9 bg-white rounded border border-[#dbdbdb] text-[#181a22] text-sm font-normal font-['Open Sans'] leading-tight"
              name="status"
              id="status"
            >
              <option value="trainhiem">Yêu cầu trải nghiệm</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-6 pt-[6px] h-14">
        <label
          className=" text-[#8f8f8f] text-xs font-normal whitespace-nowrap"
          htmlFor=""
        >
          Giới tính
          <span className="text-[#da5353] text-xs font-normal">*</span>
        </label>
        <div className="flex gap-2 items-center justify-center">
          <input
            className="text-[#181a22] text-sm font-normal font-['Open Sans'] leading-tight"
            type="radio"
            name=""
            id="male"
          />
          <label htmlFor="male">Nam</label>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <input
            className="text-[#181a22] text-sm font-normal font-['Open Sans'] leading-tight"
            type="radio"
            name=""
            id="female"
          />
          <label htmlFor="female">Nữ</label>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <input
            className="text-[#181a22] text-sm font-normal font-['Open Sans'] leading-tight "
            type="radio"
            name=""
            id="orther"
          />
          <label htmlFor="orther">Khác</label>
        </div>
      </div>
      <div className="flex flex-col items-start gap-1">
        <label
          className=" text-[#8f8f8f] text-xs font-normal whitespace-nowrap"
          htmlFor=""
        >
          Ngày sinh
        </label>
        <input
          className=" outline-none w-[345px] h-9 px-2 pl-[18px] bg-[#edf9f6] rounded border border-[#dbdbdb] text-[#181a22] text-sm font-normal font-['Open Sans'] leading-tight"
          type="date"
          name=""
          id=""
        />
      </div>
    </div>
  );
}

export default CustomerInfo;
