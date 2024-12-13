import React, { useState, useEffect } from "react";
import LocationTinh from "./LocationTinh";
import LocationHuyen from "./LocationHuyen";
import LocationQuan from "./LocationQuan";

function Location() {
  const [data, setData] = useState(null);
  const [codeHuyen, setCodeHuyen] = useState(null);
  const [codeQuan, setCodeQuan] = useState(null);

  const handleValueTinh = (code) => {
    setCodeHuyen(code);
    // console.log(code);
    return code;
  };

  const handleValueHuyen = (code) => {
    setCodeQuan(code);
    // console.log(code);
    return code;
  };

  useEffect(() => {
    // Giả lập việc gọi API
    const getTinh = async () => {
      const url = "https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1";
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result?.data.data || []);
      } catch (error) {
        console.error(error);
      }
    };
    getTinh();
  }, []);

  return (
    <div className="flex flex-col items-start justify-start gap-3">
      <label className=" text-[#8f8f8f] text-xs font-normal" htmlFor="care">
        Địa chỉ liên hệ
      </label>
      <LocationTinh tinh={data} handleValueTinh={handleValueTinh} />
      {codeHuyen ? (
        <LocationHuyen code={codeHuyen} handleValueHuyen={handleValueHuyen} />
      ) : (
        <LocationHuyen />
      )}
      {/* {codeQuan ? <LocationQuan code={codeQuan} /> : <LocationQuan />} */}
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
