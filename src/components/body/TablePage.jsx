import React from "react";
import TableNumDetail from "./TableNumDetail";
import TableNumPage from "./TableNumPage";

function TablePage() {
  return (
    <div className="flex justify-between mt-[25px]">
      <TableNumDetail />
      <TableNumPage />
    </div>
  );
}

export default TablePage;
