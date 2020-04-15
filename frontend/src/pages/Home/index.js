import React, { useState, useEffect } from 'react'
import { FiPower, FiTrash2, FiEdit3 } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import './style.css'
import api from '../../services/api'

export default function Home() {

    const [user, setUser] = useState([])

    const history = useHistory()

    const username = localStorage.getItem('type')

    useEffect(() => {
        api.get('/register').then(res => {
            setUser(res.data)            
        })
    });

    function format(value) {
        return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
    }

    async function handleDelete(id) {
        try {
            await api.delete(`user/${id}`).then(
                alert('Deletado com sucesso!')
            )
        }catch (err) {
            alert('Erro ao deletar, tente novamente')
        }
    }

    function handleEdit(id) {
        history.push(`user/${id}`)
        // console.log(`edit no id ${id}`);
        
    }

    function handleLogout() {
        localStorage.clear()
        history.push('/')
    }

    return (
        <div className="profile-container">
            <header>
                <span>Bem vindo, {username}</span>

                <Link className="button" to="register">Cadastrar novo usuário</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="30706f" />
                </button>

            </header>

            <h1>Todos os usuários</h1>

            <ul>
                {
                    user.map(user => (

                        <li key={user.id}>
                            <strong>NOME COMPLETO:</strong>
                            <p>{user.name} {user.last_Name}</p>

                            <strong>CPF ou CNPJ:</strong>
                            <p>{user.cpf}</p>

                            <strong>VALOR:</strong>
                            <p>{format(user.value)}</p>

                            <div>
                                <button onClick={() => handleEdit(user.id)}>
                                    <FiEdit3 size={20} color="30706f" />
                                </button>
                                <button onClick={() => handleDelete(user.id)}>
                                    <FiTrash2 size={20} color="30706f" />
                                </button>
                            </div>
                        </li>

                    ))
                }
            </ul>
        </div>
    )
}