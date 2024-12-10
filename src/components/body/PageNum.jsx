import React from "react";

function PageNum() {
  return (
    <div className="flex justify-center items-center gap-[10px]">
      <div className="h-9 px-[15px] py-3 rounded-[39px] border border-[#bdbdbd] justify-center items-center gap-2.5 inline-flex">
        <svg
          width="7"
          height="11"
          viewBox="0 0 7 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector"
            d="M6.5 0.465684C6.5 0.109323 6.06914 -0.0691433 5.81716 0.182843L0.782842 5.21716C0.626632 5.37337 0.626633 5.62663 0.782843 5.78284L5.81716 10.8172C6.06914 11.0691 6.5 10.8907 6.5 10.5343L6.5 0.465684Z"
            fill="#828282"
          />
        </svg>
      </div>
      <div className="h-9 px-[15px] py-3 rounded-[39px] border border-[#bdbdbd] justify-center items-center gap-2.5 inline-flex">1</div>
      <div className="h-9 px-[15px] py-3 rounded-[39px] border border-[#bdbdbd] justify-center items-center gap-2.5 inline-flex">2</div>
      <div className="h-9 px-[15px] py-3 rounded-[39px] border border-[#bdbdbd] justify-center items-center gap-2.5 inline-flex">3</div>
      <div className="h-9 px-[15px] py-3 rounded-[39px] border border-[#bdbdbd] justify-center items-center gap-2.5 inline-flex">4</div>
      <div className="h-9 px-[15px] py-3 rounded-[39px] border border-[#bdbdbd] justify-center items-center gap-2.5 inline-flex">...</div>
      <div className="h-9 px-[15px] py-3 rounded-[39px] border border-[#bdbdbd] justify-center items-center gap-2.5 inline-flex">6</div>
      <div className="h-9 px-[15px] py-3 rounded-[39px] border border-[#bdbdbd] justify-center items-center gap-2.5 inline-flex">
        <svg
          width="7"
          height="11"
          viewBox="0 0 7 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 10.5343C0.5 10.8907 0.930857 11.0691 1.18284 10.8172L6.21716 5.78284C6.37337 5.62663 6.37337 5.37337 6.21716 5.21716L1.18284 0.182844C0.930856 -0.0691414 0.5 0.109325 0.5 0.465688L0.5 10.5343Z"
            fill="#828282"
          />
        </svg>
      </div>
    </div>
  );
}

export default PageNum;
