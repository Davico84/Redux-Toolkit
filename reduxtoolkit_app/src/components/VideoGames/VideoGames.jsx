
import {useDispatch, useSelector} from "react-redux"
import { useEffect } from 'react'
import {getvideoGames} from "../../redux/videogamesActions"
import {videogames} from "../../utils/arreglo"
const VideoGames = () => {
  const dispatch= useDispatch();
  
  const vGames=useSelector((state)=>state.videogamesState)
  
  useEffect(()=>{
    dispatch(getvideoGames()) ;
  },[])

  // if (vGames)
  //   console.log("videjuegos selector",vGames);

  return (
    <div>
      <h1>Lista de VideoGames</h1>
      <h2>el tamañao del arreglo es {videogames.length}</h2>
      {vGames.videoGames && vGames.videoGames.map((elem,i)=>{
        // console.log(elem)
        return (
            <div key={i}>
                <p>Nombre{elem.name}</p>
                
                <img src={elem.background_image} alt={elem.name }/>
               
            </div>
        )
      })

      }
      
    </div>
  )
}

export default VideoGames
