import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logo.png';
import precodoproduto from '../../assets/preco.png';
import nomedoproduto from '../../assets/nomeproduto.png';
import quantidadeproduto from '../../assets/quantidadeproduto.png';
import categoriaproduto from '../../assets/categoriaproduto.png';

export default function NewProduct() { 
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('');
    const [preco, setPreco] = useState('');
    const [quantidade, setQuantidade] = useState('');

    const history = useHistory();

    async function handleNewProduto(evento){
        evento.preventDefault();

        const data = {
            nome,
            categoria,
            preco,
            quantidade,
        };

        try{
            await api.post('produto', data)
            history.push('/produto');
        } catch(err){
            alert("Erro ao Cadastrar o Produto. Tente novamente!")
        }
    }

    return (
        <div className="new-product">
            <div className="content">
                <section>

                    <h1>Cadastrar novo Produto</h1>
                    <img src={logo} alt="LogoMarca"/>
                    
                    <p>
                        <Link className="back-link" to="/produto">
                            <FiArrowLeft size={16} color="#E02041"/>
                            Voltar
                        </Link>
                    </p>
                </section>

                <form onSubmit={handleNewProduto}>
                    <input 
                        placeholder="Nome do Produto"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                        required
                    />
                    <img className="nomeproduto" src={nomedoproduto} alt="Nome"/>

                    <input
                        placeholder="Categoria"
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
                        required
                    />
                    <img className="categoriaproduto" src={categoriaproduto} alt="Categoria"/>

                    <input 
                        placeholder="Preço"
                        value={preco}
                        onChange={e => setPreco(e.target.value)}
                        required
                    />
                    <img className="precoproduto" src={precodoproduto} alt="Preço"/>

                    <input 
                        placeholder="Quantidade"
                        value={quantidade}
                        onChange={e => setQuantidade(e.target.value)}
                        required
                    />
                    <img className="quantidadeproduto" src={quantidadeproduto} alt="Quantidade"/>


                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>

        </div>
    )
}