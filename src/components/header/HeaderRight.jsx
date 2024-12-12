import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";
import ButtonAdd from "./ButtonAdd";

function HeaderRight({tinh , huyen, getHuyen}) {
  return (
    <>
    <div className=" flex flex-col items-end gap-5">
      <div className="flex gap-3 ">
        <div className="flex flex-col items-end">
          <p>Mrs Conan</p>
          <p>Nhân viên kinh doanh</p>
        </div>
        <Avatar>
          <AvatarImage src="/avatar.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <ButtonAdd tinh = {tinh} huyen = {huyen} getHuyen ={getHuyen}/>
    </div>
    </>
  );
}

export default HeaderRight;
