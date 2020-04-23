import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import logoImg from '../../assets/logo.png';
import voltar from '../../assets/return.png';

import api from '../../services/api';

import './styles.css'

export default function Produto() {

    const history = useHistory();

    const [produtos, setProdutos] = useState([]);
    useEffect(() => {
        api.get('produto/', {}).then(resposta => {
            setProdutos(resposta.data);
        })
    }, []);

    async function handleDeleteIncident(nome){
        try{
            await api.delete(`produto/${nome}`)
            alert('Produto Deletado do Estoque');

            setProdutos(produtos.filter(produtos => produtos.nome !== nome));
        } catch(err){
            alert('Erro ao deletar o Produto, tente novamente!')
        }
    }

    function handleLogout() {
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="LogoMarca"/>
                <span>Bem vindo ao Controle de Estoque</span>
                <Link className="button" to="/product/novo">Cadastrar novo Produto</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>
 
            <h1>Produtos cadastrados</h1>

            <ul>
                {produtos.map(produto => (
                    <li>  
                        <strong>NOME:</strong>
                        <p>{produto.nome}</p>
                        
                        <strong>CATEGORIA:</strong>
                        <p>{produto.categoria}</p>

                        <strong>PREÇO:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produto.preco)}</p>

                        <strong>QUANTIDADE:</strong>
                        <p>{produto.quantidade}</p>

                        <button onClick={() => handleDeleteIncident(produto.nome)} type="button">
                            <FiTrash2 size={20} color="#a8a8a3"/>
                        </button>
                    </li>
                ))}
            </ul>

            <Link className="rodape" to="/menu">
                <img src={voltar} alt="Voltar" width="64px" height="64px"/>
            </Link>
            
        </div>
    );
};