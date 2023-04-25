import { useState,useEffect } from 'react'
import './App.css'
import VideoGames from './components/VideoGames/VideoGames'
import Form from './components/Form/Form'
import {addUser} from "./redux/usersSlices"
import { useDispatch } from 'react-redux'
import axios from "axios"

function App() {
  const [count, setCount] = useState(0)
  
   const dispatch= useDispatch();
  
  
  useEffect(()=>{
    
  //   // axios("https://api.rawg.io/api/games?key=17524152b930472da51fd07c66dc681c")
  //   // .then(res => dispatch(getAllVideogames(res.data.results)))
  //   // // .then(res => console.log(res.data.results))
  //   // .catch(e=>console.log(e))
  //   fetch ("https://api.rawg.io/api/games?key=17524152b930472da51fd07c66dc681c")
  //     .then((response) => response.json())
  //     .then((data)=>dispatch(getAllVideogames(data.results)))
  //     .catch((error)=> console.log("error:",error))
    fetch("https://jsonplaceholder.typicode.com/users/2")
    .then((res) =>res.json())
    .then((data)=> dispatch(addUser(data)))
    .catch((error)=> console.log(error))
  },[])

  return (
    <>
      <div>
        <Form/>
      <VideoGames/>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>incrementar
          
        </button>
        <i>_
          <label>
          count is {count}
          </label>
          _
        </i>
        <button onClick={() => setCount((count) => count - 1)}>
          decrementar
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
