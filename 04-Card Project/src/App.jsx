import React from 'react'
import Card from './components/card'
import {RotateCwSquare} from 'lucide-react'
 

const App = () => {
  
  const arr =[
    {
      cion: <RotateCwSquare  width={18} />,
      name1: "Hnbl Tone",
      name2: "Analye"
    },
    {
      cion: <RotateCwSquare  width={18} />,
      name1: "Seo Analyzer",
      name2: "Optimizer"
    },
    {
      cion: <RotateCwSquare  width={18} />,
      name1: "Content",
      name2: "Optimizer"
    },
    {
      cion: <RotateCwSquare  width={18} />,
      name1: "Pond",
      name2: "Neceind"
    },
    {
      cion: <RotateCwSquare  width={18} />,
      name1: "Post Fhuin",
      name2: "Fielcing"
    },
    {
      cion: <RotateCwSquare  width={18} />,
      name1: "Gujot Guiid",
      name2: "Bucuzcx"
    },
    {
      cion: <RotateCwSquare  width={18} />,
      name1: "Sugiccit",
      name2: "Optimizer"
    },
    {
      cion: <RotateCwSquare  width={18} />,
      name1: "Soog Miuci",
      name2: "Epciozer"
    }
    
  ];

  return (
    <div className='parent'>
      
      <div className="logo">
            <h2>Logo</h2>
            <div className='logo_tag'>
            <a href="#">Features</a>
            <a href="#">Fricing</a>
            <a href="#">Pricing</a>
            <a href="#">Support</a>
            </div>
             
             <button>Sign up</button>
         </div>

    {arr.map(function(elem){
       return <Card  com={elem.cion} name1={elem.name1} name2= {elem.name2} /> 
    })}


    </div>
  )
}

export default App
