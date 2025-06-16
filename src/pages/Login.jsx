import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8000/usuarios/login', {
                username,
                password
            }, {
                withCredentials: true  // NECESARIO para que axios reciba y guarde la cookie
            })
            console.log('Login OK:', response)
            navigate('/home')
        } catch (error) {
            alert('Login inválido')
        }
    }


    return (
        <div style={{ maxWidth: 400, margin: 'auto', paddingTop: 100 }}>
            <h2>Login</h2>
            <input placeholder="Usuario" value={username} onChange={e => setUsername(e.target.value)} />
            <input placeholder="Contraseña" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Ingresar</button>
        </div>
    )
}

export default Login