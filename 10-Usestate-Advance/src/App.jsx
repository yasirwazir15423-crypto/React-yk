import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState({user:"yasir khan" , age:19}) 

  const btnclicked  = () =>{
    const newNum = {...num}
     console.log(newNum.user);
    newNum.user = "wazir";
    newNum.age = 20;
    setnum(newNum)
  }
  return (
    <div>
      <h1>{num.user} {num.age}</h1>
      <button onClick={btnclicked}>click</button>
    </div>
  )
}

export default App
