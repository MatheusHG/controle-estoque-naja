const connection = require('../database/connection');

module.exports = {
    async index (requisicao, resposta) {
        const { categoria } = requisicao.query;
        try {
            if(categoria) {
                var produtos = await connection('produto').where({categoria})
            }else{
                var produtos = await connection('produto');
            }
            return resposta.status(200).json(produtos);
        } catch(err) {{
            return resposta.status(400).json({error: err.message})
        }}
    },

    async create (requisicao, resposta) {
        try {
            const { nome, categoria, preco, quantidade } = requisicao.body;
            const id = await connection('produto').insert({
                nome,
                categoria,
                preco,
                quantidade,
            });

            return resposta.status(201).json(id);

        }catch(err) {
            return resposta.status(400).json({error: err.message});
        }

    },

    async delete (requisicao, resposta) {
        const { id } = requisicao.params;
        await connection('produto').where({id}).delete();

        return resposta.status(204).json({message: 'Produto deletado!'});
    }
};
