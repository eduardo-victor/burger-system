import axios from "axios"

function App() {

  const fetch = () => {
    axios.get('http://localhost:7000/')
    .then((res) => {
      console.log(res.data)
    })
  }

  return (
    <>
      <div>
        <button onClick={fetch}>TESTA</button>
      </div>
    </>
  )
}

export default App
