import React from 'react'

function HeaderTitle() {
  return (
    <div className='flex'>
        <div className='object-cover w-[30px] h-[30px]'>
            <img className='w-full h-full' src="/icon-KH.png" alt="" />
        </div>
        <h1 className='px-[6px] text-[#181a22] text-[28px] font-semibol leading-none '>Quản Lý Khách Hàng</h1>
    </div>
  )
}

export default HeaderTitle