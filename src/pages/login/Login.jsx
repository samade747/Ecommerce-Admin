import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginFailure, loginStart, loginSuccess } from '../../redux/userRedux'
import { login } from '../../redux/apiCalls'


const login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const handleClick = () => {
        e.preventDefault()
        login(dispatch, {username, password})

    }

  return (
    <div 
    style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: "center" ,
      justifyContent: 'center'
      }}>
        <input
        style={{padding: '10px', marginBottom: '20px'}}
         type="text"
         placeholder='username'
          onChange={e => setUsername(e.target.value)} 
        />
        <input
        style={{padding: '10px'}}
         type="password"
         placeholder='password'
         onChange={e => setPassword(e.target.value) }/>

        <button onClick={handleClick}>login</button>
    </div>
  )
}

export default login