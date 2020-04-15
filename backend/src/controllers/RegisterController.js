const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const register = await connection('register').select('*');
        return res.json(register);
    },

    async create(req, res) {
        const { name, last_name, email, tel, cel, birth_date, cep, city, uf, cpf, value, about, reason} = req.body;

        await connection('register').insert({
            name,
            last_name,
            email,
            tel,
            cel,
            birth_date,
            cep,
            city,
            uf,
            cpf,
            value,
            about,
            reason
        });
 
        return res.json({success: 'Usuário cadastrado com sucesso'});
    },

};