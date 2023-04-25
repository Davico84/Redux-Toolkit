
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




  return (
    <div>
      <h1>Lista de VideoGames</h1>
      <h2>el tamañao del arreglo es {videogames.length}</h2>
      {vGames.videoGames && vGames.videoGames.map((elem,i)=>{
        // console.log(elem)
        return (
            <div key={i}>
                <p>Nombre{elem.name}</p>
                <p>ID{elem.id}</p>
                <img src={elem.background_image}
                 alt={elem.name } 
                width={100} 
                height={100}  />
                <p>fin</p>
            </div>
        )
      })

      }
      
    </div>
  )
}

export default VideoGames
