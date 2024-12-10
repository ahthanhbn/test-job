import React, { useRef } from "react";
import TablePage from "./TablePage";

function Table() {
  const renderRows = () => {
    const rows = [];
    for (let i = 0; i < 50; i++) {
        rows.push(
            <tr key={i}>
                <td className="pl-7">{i + 1}</td>
                <td>EA09888765</td>
                <td>Nguyễn Văn A</td>
                <td>0368585812</td>
                <td>Nguyenbathanh12481924@gmail.com</td>
                <td>Nguyen van Nghiem</td>
                <td>Website</td>
                <td>Gọi tư vấn ngoài giờ hành chính</td>
                <td>06/09/2023</td>
            </tr>
        );
    }
    return rows;
};
  return (
    <>
    <div className=" h-[750px] overflow-auto  border rounded-tl-[10px] rounded-tr-[10px] border-[#bdbdbd]">
      <table className="w-full">
        <thead className=" sticky top-0 h-16 bg-[#f2f2f2] border-[#bdbdbd]">
          <tr>
            <th className=" pl-7 ">#</th>
            <th>Mã KH</th>
            <th>Họ và tên</th>
            <th className="">SĐT</th>
            <th className="">Email</th>
            <th>Người tiếp thị</th>
            <th>Nguồn</th>
            <th className="">Ghi chú</th>
            <th className="">Ngày tạo</th>
          </tr>
        </thead>
        <tbody  className=" overflow-y-scroll">
          {renderRows()}
        </tbody>
      </table>
    </div>
    <TablePage/>
    </>
  );
}

export default Table;
