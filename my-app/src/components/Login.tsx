import React from 'react';
import '../styles/Login.css';
import userSvg from '../resources/user.svg';

interface LoginState{
    login: string;
    password: string;
    buttonStatus: boolean;
}

class Login extends React.Component<any, LoginState> {
    constructor(props: any) {
        super(props);
        this.state = { login: '', password: '', buttonStatus: true};

        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeLogin(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ login: event.target.value });
    }

    handleChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        alert('Login: ' + this.state.login + '\nPassword: ' + this.state.password);
        event.preventDefault();
    }

    checkButtonStatus() {
        if(this.state.login !== '' && this.state.password !== '') this.setState({buttonStatus: false});
        else this.setState({buttonStatus: true});
    }

    validate = (event: React.KeyboardEvent<HTMLDivElement>) => {
        this.checkButtonStatus();
    }

    render() {
        return (
            <div id="login" onKeyUp={this.validate}>
                <div id="loginImg">
                    <img src={userSvg} alt="User SVG" />
                </div>
                <div id="loginForm">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <p>Login:</p>
                            <div id="loginInput">
                                <input type="text" value={this.state.login} onChange={this.handleChangeLogin} />
                            </div>
                            <p>Hasło:</p>
                            <div id="loginInput">
                                <input type="password" value={this.state.password} onChange={this.handleChangePassword} />
                            </div>
                        </label>
                        <div id="loginButton">
                            <input type="submit" value="Zaloguj" disabled={this.state.buttonStatus} />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;