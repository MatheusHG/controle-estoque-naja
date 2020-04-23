import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi'

import './styles.css'

import logoImg from '../../assets/logo.png';
import Celular from '../../assets/ipad.png';
import Tv from '../../assets/tv.png';
import Eletrodomestico from '../../assets/eletrodomestico.png';
import Videogame from '../../assets/videogame.png';

export default function Menu() {
    const history = useHistory();

    function handleLogout() {
        history.push('/');
    }

    return(
        <div className="menu-container">
            <header>
                <img src={logoImg} alt="LogoMarca"/>
                <span>Bem vindo ao Controle de Estoque</span>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Selecione a Categoria</h1>

            <ul>
                <li>
                    <Link className="Celular" to="/produto">
                        <img src={Celular} alt="Celular" height="170px" width="170px" />
                    </Link>
                </li>

                <li>
                    <Link className="Tv" to="/produto">
                        <img src={Tv} alt="Tv" height="170px" width="170px" />
                    </Link>
                </li>

                <li>
                    <Link className="Eletrodomestico" to="/produto">
                        <img src={Eletrodomestico} alt="Eletrodomestico" height="170px" width="170px" />
                    </Link>
                </li>

                <li>
                    <Link className="Videogame" to="/produto">
                        <img src={Videogame} alt="Videogame" height="170px" width="170px" />
                    </Link>
                </li>
            </ul>
        </div>
    )
};