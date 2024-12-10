import React, { useState } from "react";

function ButtonAdd() {
  const [isFormVisible, setIsFormVisible] = useState(false); // State để quản lý hiển thị form

  // Hàm để chuyển đổi hiển thị form
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <>
      <button
        onClick={toggleFormVisibility}
        className=" relative px-5 py-[8.50px] text-white bg-[#bc8205] rounded-lg border justify-center items-start gap-2.5 inline-flex"
      >
        Thêm danh sách
      </button>
      {isFormVisible && ( // Hiển thị form nếu isFormVisible là true
        <div className="absolute z-20 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50px] bg-white">
          <div className="flex justify-between items-center px-[19px] py-[17px] bg-[#bd8306]/90 rounded-tl rounded-tr">
            <h2>Tạo khách hàng</h2>
            <button
              onClick={toggleFormVisibility}
              className="w-[27.89px] text-[36px] flex items-center justify-center text-white h-[30px] rounded-lg border-2 border-white bg-[#bd8306]/90"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_0_901)">
                  <path
                    d="M18.4557 6.41L17.1447 5L11.9471 10.59L6.74949 5L5.43848 6.41L10.6361 12L5.43848 17.59L6.74949 19L11.9471 13.41L17.1447 19L18.4557 17.59L13.2581 12L18.4557 6.41Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_901">
                    <rect
                      width="22.3152"
                      height="24"
                      fill="white"
                      transform="translate(0.789429)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <form className="px-[25px] py-[25px] flex flex-col">
            <div className="flex gap-[100px]">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col items-start gap-[4px]">
                  <label
                    className=" text-[#8f8f8f] text-xs font-normal"
                    htmlFor="name"
                  >
                    Họ tên khách hàng
                    <span className="text-[#da5353] text-xs font-normal">
                      *
                    </span>
                  </label>
                  <input
                    className="w-[363px] px-2 pl-[18px] h-9 bg-[#edf9f6] rounded border border-[#dbdbdb] text-[#181a22] text-sm font-normal font-['Open Sans'] leading-tight"
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
                      <span className="text-[#da5353] text-xs font-normal">
                        *
                      </span>
                    </label>
                    <select className="w-[170px] px-2  h-9 bg-[#edf9f6] rounded border border-[#dbdbdb] text-[#181a22] text-sm font-normal font-['Open Sans'] leading-tight" name="nguon" id="nguon" >
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
                      <span className="text-[#da5353] text-xs font-normal">
                        *
                      </span>
                    </label>
                    <select
                      className="w-[170px] px-[10px]  h-9 bg-white rounded border border-[#dbdbdb] text-[#181a22] text-sm font-normal font-['Open Sans'] leading-tight"
                      name="status" id="status"
                    >
                      <option value="trainhiem">Yêu cầu trải nghiệm</option>
                    </select>
                  </div>
                </div>
              </div>
              <div></div>
              <div></div>
            </div>
            <div></div>
            <div></div>
          </form>
        </div>
      )}
    </>
  );
}

export default ButtonAdd;
