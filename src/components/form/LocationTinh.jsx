import React, { useEffect, useState } from "react";

function LocationTinh({handleValueTinh}) {
  const [tinh, setTinh] = useState(null);
  
  useEffect(() => {
    // Giả lập việc gọi API
    const getTinh = async () => {
      const url = "https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1";
      try {
        const response = await fetch(url);
        const result = await response.json();
        setTinh(result?.data.data || []);
      } catch (error) {
        console.error(error);
      }
    };
    getTinh();
  }, []);

  return (
    <select
      className="outline-none w-[304px] px-2 pl-[18px] h-9 bg-[#edf9f6] rounded border border-[#dbdbdb] text-[#8f8f8f] text-sm font-normal font-['Open Sans'] leading-tight"
      name=""
      id=""
      onChange={(e) => handleValueTinh(e.target.value)}
    >
      <option value="">-- Chọn Tỉnh --</option>

      {tinh
        ? tinh.map((e) => {
            return (
              <option key={e.code} value={e.code}>
                {e.name}
              </option>
            );
          })
        : null}
    </select>
  );
}

export default LocationTinh;
