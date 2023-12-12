import { useState } from "react"
import axios from "axios"

function App() {

  const [lanches, setLanches] = useState([]);

  const fetch = () => {
    axios.get('http://localhost:7000/api/menu/items')
    .then((res) => {
      setLanches(res.data)
    })
  }

  return (
    <>
      <div>
        <div>
          {lanches?.map(item => (
            <div>
              <h1>{item.name}</h1>
            </div>
          ))}
        </div>
        <button onClick={fetch}>TESTA</button>
        
      </div>
    </>
  )
}

export default App
