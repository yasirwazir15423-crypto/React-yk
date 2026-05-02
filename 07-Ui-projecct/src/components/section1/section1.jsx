import React from 'react'
import Navbar from './Navbar'
import Page1_Content from './Page1_Content'

const section1 = (props) => {
  return (
    <div className='h-screen w-full  bg-gray-300'>
        <Navbar />
        <Page1_Content users={props.users}/>
    </div>
  )
}

export default section1
