import {getAllVideogames, addUser} from "./videogamesSlice";
import axios from "axios";

export const  getvideoGames = () =>(dispatch)=>{
       // axios("http://localhost:3001/videogames")
    
    axios("https://api.rawg.io/api/games?key=17524152b930472da51fd07c66dc681c")
    .then(res => dispatch(getAllVideogames(res.data.results)))
    .catch(e=>console.log(e))
}
export const getUser = () =>(dispatch)=>{
fetch("https://jsonplaceholder.typicode.com/users/2")
    .then((res) =>res.json())
    .then((data)=> dispatch(addUser(data)))
    .catch((error)=> console.log(error))
}