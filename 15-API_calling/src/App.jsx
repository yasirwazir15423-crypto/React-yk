import axios from 'axios'
import { useState } from 'react'

const App =  () => {

    const [data, setData] = useState([])
    const getdata = async ()=> {
    const respones = await axios.get('https://jsonplaceholder.typicode.com/users');

    setData(respones.data)
}
 


  return (
    <div>
      <button onClick={getdata}>Get Data</button>
      <div>
        {data.map(function(elem ,idx){
            return <h3>hello {idx}</h3>
        })}
      </div>
    </div>


  
  )
}

export default App
