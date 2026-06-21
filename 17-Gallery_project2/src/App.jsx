import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])

  const [index, setIndex] = useState(1)
  
  const getData = async ()=>{
     const data = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
    const  response = await data.json()
     setUserData(response.data)

    }

   useEffect(function(){
      getData()
  } , [index])

 

  let printData = <h3 className='text-gray-500 font-bold p-5 text-[30px]'>Loading....</h3>

  if(userData.length>0){
    printData =userData.map(function(elem, idx){
          return <div key={idx}>
           <a  href={elem.url} target='_blank'>
              <div>
              <img className='h-50 w-50 object-cover  rounded-2xl' src={elem.download_url} alt="" />
              </div>
              <h3>{elem.author}</h3>
           </a>
          </div>
        })
  }



  return (
    <div className='h-screen w-full overflow-hidden p-4 bg-black text-white '>

      <h1 className=' fixed text-6xl  '>{index}</h1>

      <div className=' flex flex-wrap gap-3'>
        
        {printData}
        
      </div>

      <div className=' flex justify-center items-center p-4  gap-4'>
        <button
        onClick={()=>{
          if(index>1){
            setIndex(index-1)
          }
        }} 
        className='bg-amber-400 text-black rounded font-semibold active:scale-95 px-6 py-2 '>Prev</button>
        <button 
          onClick={()=>{
           setIndex(index+1)
        }} 
        className='bg-amber-400 text-black rounded font-semibold active:scale-95 px-6 py-2 '>Next</button>
      </div>


    </div>
  )
}

export default App
