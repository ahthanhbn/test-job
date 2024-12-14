import React, { useEffect, useState } from "react";

function LocationQuan({ code }) {
  const [quan, setQuan] = useState(null);

  useEffect(() => {
    // Giả lập việc gọi API
    const getHuyen = async (code) => {
      const url = `https://vn-public-apis.fpo.vn/wards/getByDistrict?districtCode=${code}&limit=-1`;
      try {
        const response = await fetch(url);
        const result = await response.json();
        // console.log(result?.data.data || []);
        setQuan(result?.data.data || []);

        // setHuyen(result?.data.data || []);
      } catch (error) {
        console.error(error);
      }
    };
    getHuyen(code);
  }, [code]);
  return (
    <select
      className="outline-none w-[304px] px-2 pl-[18px] h-9 bg-[#edf9f6] rounded border border-[#dbdbdb] text-[#8f8f8f] text-sm font-normal font-['Open Sans'] leading-tight"
      name=""
      id=""
    >
      <option value="">-- Chọn Quận --</option>
      {quan ? (
        quan.map((e) => {
          return (
            <option key={e.code} value={e.code}>
              {e.name}
            </option>
          );
        })
      ) : (
        <option>-- Chọn Quận --</option>
      )}
    </select>
  );
}

export default LocationQuan;
