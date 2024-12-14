import React from "react";

function ChooseTime() {
  return (
    <div className="relative flex flex-col items-start gap-1 ">
      <label className=" text-[#8f8f8f] text-xs font-normal" htmlFor="timetotime">
        Chọn khung giờ
        <span className="text-[#da5353] text-xs font-normal">*</span>
      </label>
      <select className=" p-2 appearance-none text-[#181a22] text-sm font-normal font-['Open Sans'] leading-tight w-[345.50px] h-9 rounded border border-[#dbdbdb] outline-none" name="" id="timetotime ">
        <option value="">8:00 - 9:00</option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <label htmlFor="timetotime" className="absolute bottom-0 right-0 z-2 w-9 h-9 flex justify-center items-center rounded-tr rounded-br border border-[#dbdbdb]">
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="calendar_today" clip-path="url(#clip0_0_636)">
            <path
              id="Vector"
              d="M13.5109 2.00001H12.8442V0.666672H11.5109V2.00001H4.8442V0.666672H3.51086V2.00001H2.8442C2.11086 2.00001 1.51086 2.60001 1.51086 3.33334V14C1.51086 14.7333 2.11086 15.3333 2.8442 15.3333H13.5109C14.2442 15.3333 14.8442 14.7333 14.8442 14V3.33334C14.8442 2.60001 14.2442 2.00001 13.5109 2.00001ZM13.5109 14H2.8442V5.33334H13.5109V14Z"
              fill="black"
              fill-opacity="0.56"
            />
          </g>
          <defs>
            <clipPath id="clip0_0_636">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(0.17749)"
              />
            </clipPath>
          </defs>
        </svg>
      </label>
    </div>
  );
}

export default ChooseTime;
