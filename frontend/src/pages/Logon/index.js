import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link, useHistory } from 'react-router-dom';

import GoogleLogin from 'react-google-login';

import './styles.css';

import logo from '../../assets/logo2.png';
import banner from '../../assets/banner.jpg';
import informacao from '../../assets/information.png';
import atencao from '../../assets/error.png';

export default function Logon(){

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const history = useHistory()
    const responseGoogle = (response) => {
        console.log(response)
        if (response.error) return
        history.push('/menu')
    };
    
    
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="LogoMarca" />

                <form>
                    <h1>Bem vindo ao Estoque!</h1>
                    <h2>Entre com o Google</h2>
                    <GoogleLogin className="login_google"
                    clientId="416752357236-jjuotdignvfqdmrdu7pclkkps4j5alea.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    />

                    <Link className="information" onClick={() => setModalIsOpen(true)}>
                        <img src={informacao} alt="informação"/>
                    </Link>

                    <Modal className="janelaModal" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                        <img src={atencao} alt="informação" />
                        <h1>
                            Para utilizar o login via Google, deve-se desativar os Cookies de Terceiros e atualizar o site
                        </h1>
                        <h2>
                            Configurações -> Privacidade e Segurança -> Configurações do Site -> Cookies e dados do site -> Desativar o "Bloquear cookies de terceiros"
                        </h2>
                        <div>
                            <button onClick={() => setModalIsOpen(false)}> Close </button>
                        </div>
                    </Modal>
                </form>
            </section>

            <img className="banner" src={banner} alt="Banner" />
        </div>
    );
}
