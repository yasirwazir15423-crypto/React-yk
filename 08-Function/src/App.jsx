import React from 'react'

const App = () => {

      function hello(){
        alert("who are you");
      }

      function abc(){
        console.log("hello");
      }

  return (
    <div>
      <input onClick={abc} type="text" placeholder='Enter Name ' />

     <button onClick={hello}>click</button>
     
    </div>
  )
}

export default App
