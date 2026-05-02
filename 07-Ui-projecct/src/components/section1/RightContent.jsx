import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props);
  return (
    <div className='h-full gap-10 flex flex-nowrap w-4/5  p-6  overflow-x-auto'>
       
       {props.users.map( function(elem , idx){
         
          return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} />

       })}
    </div>
  )
}

export default RightContent
