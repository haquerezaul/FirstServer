import { useState ,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJoke] = useState([])
  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJoke(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
)


  return (
    <>
         <h1>Toh Chaliye Shuru Karte Hai</h1>
      <p>JOKES: {jokes.length}</p>
      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.question}</h3>
            <p>{joke.answer}</p>
          </div>
        ))
      }

    </>
  )
}

export default App
