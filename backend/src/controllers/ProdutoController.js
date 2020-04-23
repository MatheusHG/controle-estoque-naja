const connection = require('../database/connection');

module.exports = {
    async index (requisicao, resposta) {
        const produtos = await connection('produto').select('*').where(requisicao.query);
        
        return resposta.json(produtos);
    },

    async create (requisicao, resposta) {
        const { nome, categoria, preco, quantidade } = requisicao.body;
        await connection('produto').insert({
            nome,
            categoria,
            preco,
            quantidade,
        })

        return resposta.json("Produto Cadastrado!");
    },

    async delete (requisicao, resposta) {
        const { nome } = requisicao.params;
        await connection('produto').where('nome', nome).delete();

        return resposta.status(204).send();
    }
};