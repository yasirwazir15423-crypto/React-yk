import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'

const App = () => {

  const users = [
    { 
      img:"https://images.unsplash.com/photo-1577636705708-91ff3664ae86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
      intro:" ",
      tag:"Satisfied"
    },
    {
       img:"https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      intro:" ",
      tag:"Unedserved"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1668383207188-f5474588d674?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      intro:" ",
      tag:"Unedbanked"
    },
    {
      img:"https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      intro:" ",
      tag:"Unedwear"
    }
  ]


  return (
    <div>
      <Section1 users={users} />
    
    </div>
  )
}

export default App
