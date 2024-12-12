import React from 'react'
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'

function Header({tinh, huyen, getHuyen}) {

  
  return (
    <header className='sticky top-0 z-10 pb-16 bg-[#f8f8f8] flex justify-between'>
        <HeaderLeft/>
        <HeaderRight tinh = {tinh} huyen = {huyen} getHuyen ={getHuyen}/>
    </header>
  )
}

export default Header