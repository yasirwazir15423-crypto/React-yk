import React from 'react'

const App = () => {

  const Formhandler = (e) =>{
    e.preventDefault();   
    console.log('form submitted');
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        Formhandler(e);
      }}>
        <input type="text" placeholder='Enter your Name' />
        <button >submit</button>
      </form>
       
    </div>
  )
}

export default App
