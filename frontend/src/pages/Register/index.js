import React, { useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from "react-router-dom";

import './style.css'
import api from '../../services/api'

export default function Register() {

    const [name, setName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [cel, setCel] = useState('')
    const [birth_date, setBirthDate] = useState('')
    const [cep, setCep] = useState('')
    const [uf, setUf] = useState('')
    const [city, seyCity] = useState('')
    const [cpf, setcpf] = useState('')
    const [value, setValue] = useState('')
    const [about, setAbout] = useState('')
    const [reason, setReason] = useState('')

    const history = useHistory()

    async function handleUser(e) {
        e.preventDefault()

        const data = ({
            name,
            last_name,
            email,
            tel,
            cel,
            birth_date,
            cep,
            uf,
            city,
            cpf,
            value,
            about,
            reason
        })

        try {
            const res = await api.post('/register', data)
            alert(res.data.success)
            history.push('/home')
        } catch (err) {
            alert('erro ao cadastrar')
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>

                    <h1>Cadastrar novo usuário</h1>
                    <p>Todos os campos são obrigatórios.</p>

                    <Link to="/home" className="back-link">
                        <FiArrowLeft size={16} color="30706f" />
                        Voltar para home
                    </Link>
                </section>
                <form onSubmit={handleUser}>
                    <div className="input-group">

                        <input
                            type="text"
                            placeholder="Nome"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Sorenome"
                            value={last_name}
                            onChange={e => setLastName(e.target.value)}
                        />

                    </div>
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <div className="input-group">

                        <input
                            type="text"
                            placeholder="Telefone"
                            value={tel}
                            onChange={e => setTel(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Celular"
                            value={cel}
                            onChange={e => setCel(e.target.value)}
                        />

                    </div>
                    <div className="input-group">

                        <input
                            type="text"
                            placeholder="Data de nascimento"
                            value={birth_date}
                            onChange={e => setBirthDate(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="CEP"
                            value={cep}
                            onChange={e => setCep(e.target.value)}
                        />

                    </div>
                    <div className="input-group">

                        <input
                            type="text"
                            placeholder="Estado"
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Cidade"
                            value={city}
                            onChange={e => seyCity(e.target.value)}
                        />

                    </div>
                    <div className="input-group">

                        <input
                            type="text"
                            placeholder="CPF ou CNPJ"
                            value={cpf}
                            onChange={e => setcpf(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Valor desejado"
                            value={value}
                            onChange={e => setValue(e.target.value)}
                        />

                    </div>
                    <div className="input-group">

                        <input
                            type="text"
                            placeholder="Como soube da Firgun ?"
                            value={about}
                            onChange={e => setAbout(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Motivo do Crédito ?"
                            value={reason}
                            onChange={e => setReason(e.target.value)}
                        />
                        
                    </div>


                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}