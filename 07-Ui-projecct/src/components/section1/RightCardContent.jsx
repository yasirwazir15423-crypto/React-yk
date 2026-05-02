import React from 'react'
import {MoveUpRight} from 'lucide-react'

const RightCardContent = (props) => {
  return (
    
        <div className='absolute top-0 left-0  h-full w-full  p-8 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center text-2xl font-semibold'>{props.id+1}</h2>
           
            <div>
                <p className='text-xl leading-normal  text-white mb-14 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eligendi eos molestiae voluptatem.</p>
                
                
                <div className='flex justify-between'>
                    <button className='bg-blue-600 text-white font-medium px-8 py-3 rounded-full'>{props.tag}</button>
                    <button className='bg-blue-600 text-white font-medium px-5 py-3 rounded-full'><MoveUpRight /></button>
                </div>
            </div>
        </div> 
  )
}

export default RightCardContent
