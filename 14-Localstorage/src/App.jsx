import React from 'react'

const App = () => {

 localStorage.setItem("Name","yasir")
  

  localStorage.setItem("age","19")
  
  const user = {
    Name : "safwan",
    age : 20

  }

  localStorage.setItem("user",JSON.stringify(user))

  const val = JSON.parse(localStorage.getItem("user"))
  console.log(val);

  return (
    <div>
      
    </div>
  )
}

export default App
