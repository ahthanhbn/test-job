import React from 'react'
import HeaderTitle from './HeaderTitle'
import HeaderSearch from './HeaderSearch'

function HeaderLeft() {
  return (
    <div className='flex flex-col gap-6'>
        <HeaderTitle/>
        <HeaderSearch/>
    </div>
  )
}

export default HeaderLeft