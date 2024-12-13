import React from "react";

function LocationTinh({ tinh, handleValueTinh }) {
  return (
    <select
      className="outline-none w-[304px] px-2 pl-[18px] h-9 bg-[#edf9f6] rounded border border-[#dbdbdb] text-[#8f8f8f] text-sm font-normal font-['Open Sans'] leading-tight"
      name=""
      id=""
      onChange={(e) => handleValueTinh(e.target.value)}
    >
      <option value="">-- Chọn Tỉnh --</option>
      {tinh ? (
        tinh.map((e) => {
          return (
            <option key={e.code} value={e.code}>
              {e.name_with_type}
            </option>
          );
        })
      ) : (
        <option>-- Chọn Tỉnh --</option>
      )}
    </select>
  );
}

export default LocationTinh;
