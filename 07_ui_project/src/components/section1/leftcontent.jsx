import React from 'react'
import Herotext from './herotext.jsx'
import Arrow from './arrow.jsx'

const leftcontent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3'>
        <Herotext />
        <Arrow />

    </div>
  )
}

export default leftcontent