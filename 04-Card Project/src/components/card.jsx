import React from 'react'

import {Pencil} from 'lucide-react'

const card = (props) => {
  return (
    <div className="card">
         

         <div className="top">
          <dev className='icon1'> {props.com} </dev>
          <dev className='icon2'>  <Pencil width={13}/> </dev> 
         </div>
         <div className="center">
             <h1>{props.name1}</h1>
             <h1>{props.name2}</h1>
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa quidem ut nobis error pariatur.</p>
         </div>
         <div className="bottom">
            <button>Lean more</button>
         </div>
      </div>
  )
}

export default card
