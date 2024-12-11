import React from "react";

const getTinh = async () => {
  const url = "https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1";
  const options = {
    method: "GET",
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result?.data.data || [];
  } catch (error) {
    console.error(error);
  }
};

async function Location() {
  const data = await getTinh();
  console.log(data);

  return (
    <div className="flex flex-col items-start justify-start gap-3">
      <label className=" text-[#8f8f8f] text-xs font-normal" htmlFor="care">
        Địa chỉ liên hệ
      </label>
      <select
        className="outline-none w-[304px] px-2 pl-[18px] h-9 bg-[#edf9f6] rounded border border-[#dbdbdb] text-[#8f8f8f] text-sm font-normal font-['Open Sans'] leading-tight"
        name=""
        id=""
      >
        <option value="">-- Chọn Tỉnh --</option>
        {data.map((e) => {
          return e.name ? (
            <option key={e.code} value="">
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
