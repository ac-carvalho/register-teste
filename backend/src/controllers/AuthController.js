module.exports = {

    create(req, res) {
        const { username, password } = req.body
        return username === 'adm' && password === '123' ? res.json({typeUser: "Administrador"}) : res.json({typeUser: "Usuário Comum"})
    }
}