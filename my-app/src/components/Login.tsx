import React, { useState } from 'react';
import '../styles/Login.css';
import userSvg from '../resources/user.svg';
import Header from './Header';

function Login() {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [buttonStatus, setButtonStatus] = useState(true);
    const [isdoctor, setIsDoctor] = useState(false);

    function handleChangeLogin(event: React.ChangeEvent<HTMLInputElement>) {
        setLogin(event.target.value);
    }

    function handleChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        isdoctor ? window.open("/doctorPanel", "_self") : window.open("/customerPanel", "_self")
    }

    function checkButtonStatus() {
        if (login !== '' && password !== '') setButtonStatus(false);
        else setButtonStatus(true);
    }

    function validate(event: React.KeyboardEvent<HTMLDivElement>){
        checkButtonStatus();
    }

    return (
        <>
            <Header />
            <div id="login" onKeyUp={validate}>
                <div id="loginImg">
                    <img src={userSvg} alt="User SVG" />
                </div>
                <div id="loginForm">
                    <form onSubmit={handleSubmit}>
                        <label>
                            <p>Login:</p>
                            <div id="loginInput">
                                <input type="text" value={login} onChange={handleChangeLogin} />
                            </div>
                            <p>Hasło:</p>
                            <div id="loginInput">
                                <input type="password" value={password} onChange={handleChangePassword} />
                            </div>
                        </label>
                        <div id="loginButton">
                            <input type="submit" value="Zaloguj" disabled={buttonStatus} />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;