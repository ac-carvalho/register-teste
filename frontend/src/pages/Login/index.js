import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import './style.css'
import api from "../../services/api";

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory();

    async function submitLogin(e) {
        e.preventDefault()

        try {
            const response = await api.post('/auth', { username, password })
            localStorage.setItem('type', response.data.typeUser)
            history.push('/home')
        } catch (err) {
            alert('Falha no login, tente novamente')
        }

    }

    return (
        <main className="login-container">
            <form onSubmit={submitLogin}>
                <input
                    type="text"
                    placeholder="Usuário"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit" className="button">Entrar</button>
            </form>
        </main>
    )
}