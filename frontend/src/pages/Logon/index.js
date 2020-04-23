import React from 'react';
import { useHistory } from 'react-router-dom';

import GoogleLogin from 'react-google-login';

import './styles.css';

import logo from '../../assets/logo2.png';
import banner from '../../assets/banner.jpg';

export default function Logon(){
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
                </form>
            
            </section>

            <img src={banner} alt="Banner" />
        </div>
    );
}