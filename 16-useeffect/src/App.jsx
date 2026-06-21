import { useEffect, useState } from 'react'

const App = () => {

    const [num, setNum] = useState(0)
    const [num2, setNum2] = useState(100)

    useEffect(function(){
      console.log("use effect is running...");
    },[num])  

  return (
    <dev>

        <h1>Value of num is this:{num}</h1>
        <h1>Value of num2 is this:{num2}</h1>

          <button onMouseEnter={function(){
              setNum(num + 1);
             
          }}
          onMouseLeave={() =>{
             setNum2(num2 - 1);
          }
          }
          >Add</button>

           {/* <button onClick={function(){
              setNum2(num2 - 1);
          }}>Sub</button> */}

  </dev>
  )
}

export default App
