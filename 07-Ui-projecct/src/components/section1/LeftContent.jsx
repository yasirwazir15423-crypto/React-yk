import React from 'react'
import Herotext from './Herotext'
import Arrow from './Arrow'

const LeftContent = () => {
  return (
    <div className='h-full w-3/10 flex flex-col justify-between'>
       
      <Herotext />
      <Arrow />
       
    </div>
  )
}

export default LeftContent
