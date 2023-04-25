import React from 'react'
import { useSelector } from 'react-redux'

const Form = () => {
  const user = useSelector((state)=>state.usersState)
  return (
    <div>Data de usuario
        <h1>Carga de Ususario desde el APP</h1>
        <ul>
          <li> name: {user.name }</li>
          <li> user: {user.username} </li>
          <li> email:{ user.email} </li>

        </ul>
    </div>
  )
}

export default Form