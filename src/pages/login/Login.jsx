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
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <input type="text"
         placeholder='username'
          onChange={e => setUsername(e.target.value)} 
        />
        <input type="password"
         placeholder='password'
         onChange={e => setPassword(e.target.value) }/>

        <button onClick={handleClick}>login</button>
    </div>
  )
}

export default login