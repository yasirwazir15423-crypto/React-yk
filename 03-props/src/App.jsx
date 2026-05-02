import React from 'react'
import Card from './components/card'

function App() {
  return (
    <div className='parent'>
       <Card user="Yasir kham" img="https://images.unsplash.com/photo-1773394473042-0544a86abe61?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
       <Card user="safwan kham" img="https://plus.unsplash.com/premium_photo-1765024442664-6f94292cc10d?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
  )
}

export default App
