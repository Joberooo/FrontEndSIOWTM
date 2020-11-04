import React from 'react';
import '../styles/Register.css';
import userSvg from '../resources/user.svg';

interface RegisterState {
    login: string;
    email: string;
    emailCorrect: boolean;
    emailText: string;
    password: string;
    checkPassword: string;
    passwordCorrect: boolean;
    passwordText: string;
    firstName: string;
    lastName: string;
    pesel: string;
    peselText: string;
    peselCorrect: boolean;
    buttonStatus: boolean;
    validationPasswordColor: string;
    validationPeselColor: string;
    validationEmailColor: string;
}

class Register extends React.Component<any, RegisterState> {
    constructor(props: any) {
        super(props);
        this.state = {
            login: '',
            email: '',
            emailCorrect: false,
            emailText: 'Wprowadź email.',
            password: '',
            checkPassword: '',
            passwordCorrect: false,
            passwordText: 'Wprowadź hasło i jego potwierdzenie.',
            firstName: '',
            lastName: '',
            pesel: '',
            peselText: 'Wprowadź poprawny pesel.',
            peselCorrect: false,
            buttonStatus: true,
            validationPasswordColor: "#ff0000",
            validationPeselColor: "#ff0000",
            validationEmailColor: "#ff0000"
        };

        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeCheckPassword = this.handleChangeCheckPassword.bind(this);
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangePesel = this.handleChangePesel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeLogin(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ login: event.target.value });
    }

    handleChangeEmail(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ email: event.target.value });
    }

    handleChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ password: event.target.value });
    }

    handleChangeCheckPassword(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ checkPassword: event.target.value });
    }

    handleChangeFirstName(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ firstName: event.target.value });
    }

    handleChangeLastName(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ lastName: event.target.value });
    }

    handleChangePesel(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ pesel: event.target.value });
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        alert(
            'Login: ' + this.state.login + '\n' +
            'Email: ' + this.state.email + '\n' +
            'Password: ' + this.state.password + '\n' +
            'CheckPassword: ' + this.state.checkPassword + '\n' +
            'Name: ' + this.state.firstName + '\n' +
            'LastName: ' + this.state.lastName +  '\n' +
            'Pesel: ' + this.state.pesel
        );
        event.preventDefault();
    }

    checkPasswordCorrect(){
        if(this.state.password !== '' && this.state.checkPassword !== '') {
            if(this.state.password === this.state.checkPassword) {
                this.setState({passwordText: 'Poprawnie wprowadzono hasła.', validationPasswordColor: "#00ff00", passwordCorrect: true});
            }
            else if(this.state.password !== this.state.checkPassword) this.setState({passwordText: 'Hasła nie są jednakowe.', validationPasswordColor: "#ff0000", passwordCorrect: false});
        }
        else if(this.state.password !== '' && this.state.checkPassword === '') this.setState({passwordText: 'Wprowadź potwierdzenie hasła.', validationPasswordColor: "#ff0000", passwordCorrect: false});
        else if(this.state.password === '' && this.state.checkPassword !== '') this.setState({passwordText: 'Wprowadź hasło.', validationPasswordColor: "#ff0000", passwordCorrect: false});
        else this.setState({passwordText: 'Wprowadź hasło i jego potwierdzenie.', validationPasswordColor: "#ff0000", passwordCorrect: false});
    }

    checkPeselCorrect(){
        if(this.state.pesel.length === 0) this.setState({peselText: 'Wprowadź poprawny pesel.', validationPeselColor: "#ff0000", peselCorrect: false});
        else if(this.state.pesel.length !== 11) this.setState({peselText: 'Za mało znaków.', validationPeselColor: "#ff0000", peselCorrect: false});
        else {
            const peselArray = this.state.pesel.split('');
            const peselSum = 
                parseInt(peselArray[0]) * 1 + 
                parseInt(peselArray[1]) * 3 + 
                parseInt(peselArray[2]) * 7 + 
                parseInt(peselArray[3]) * 9 + 
                parseInt(peselArray[4]) * 1 + 
                parseInt(peselArray[5]) * 3 + 
                parseInt(peselArray[6]) * 7 + 
                parseInt(peselArray[7]) * 9 + 
                parseInt(peselArray[8]) * 1 + 
                parseInt(peselArray[9]) * 3 + 
                parseInt(peselArray[10]) * 1;
            
            if(peselSum % 10 === 0) this.setState({peselText: 'Poprawnie wprowadzono pesel.', validationPeselColor: "#00ff00", peselCorrect: true});
            else this.setState({peselText: 'Wprowadzono błędny pesel.', validationPeselColor: "#ff0000", peselCorrect: false});
        }
    }

    checkEmailCorrect(){
        const expression = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if(this.state.email === '') this.setState({emailText: 'Wprowadź email.', validationEmailColor: "#ff0000", emailCorrect: false});
        else if(expression.test(this.state.email)) this.setState({emailText: 'Poprawnie wprowadzono email.', validationEmailColor: "#00ff00", emailCorrect: true});
        else this.setState({emailText: 'Wprowadzono błędny email.', validationEmailColor: "#ff0000", emailCorrect: false});
    }

    checkButtonStatus() {
        if(
            this.state.login !== '' &&
            this.state.email !== '' && 
            this.state.emailCorrect === true &&
            this.state.password !== '' &&
            this.state.checkPassword !== '' &&
            this.state.passwordCorrect === true &&
            this.state.firstName !== '' &&
            this.state.lastName !== '' &&
            this.state.pesel !== '' &&
            this.state.peselCorrect === true
        ) this.setState({buttonStatus: false});
        else this.setState({buttonStatus: true});
    }

    validate = (event: React.KeyboardEvent<HTMLDivElement>) => {
        this.checkPasswordCorrect();
        this.checkPeselCorrect();
        this.checkEmailCorrect();
        this.checkButtonStatus();
    }

    render() {
        return (
            <div id="register" onKeyUp={this.validate}>
                <div id="registerImg">
                    <img src={userSvg} alt="User SVG" />
                </div>
                <div id="registerForm">
                    <form onSubmit={this.handleSubmit}>
                        <div id="registerFormContent">
                            <label>
                                <div id="registerInput">
                                    <p>Login:</p>
                                    <input type="text" value={this.state.login} onChange={this.handleChangeLogin} />
                                </div>
                                <div id="registerInput">
                                    <p>Email:</p>
                                    <input type="email" value={this.state.email} onChange={this.handleChangeEmail} />
                                    <i style={{color : this.state.validationEmailColor}}>{this.state.emailText}</i>
                                </div>
                                <div id="registerInput">
                                    <p>Hasło:</p>
                                    <input type="password" value={this.state.password} onChange={this.handleChangePassword} />
                                    <i style={{color : this.state.validationPasswordColor}}>{this.state.passwordText}</i>
                                </div>
                                <div id="registerInput">
                                    <p>Potwierdź hasło:</p>
                                    <input type="password" value={this.state.checkPassword} onChange={this.handleChangeCheckPassword} />
                                </div>
                                <div id="registerInput">
                                    <p>Pesel:</p>
                                    <input type="text" value={this.state.pesel} onChange={this.handleChangePesel} maxLength={11} />
                                    <i style={{color : this.state.validationPeselColor}}>{this.state.peselText}</i>
                                </div>
                                <div id="registerInput">
                                    <p>Imię:</p>
                                    <input type="text" value={this.state.firstName} onChange={this.handleChangeFirstName} />
                                </div>
                                <div id="registerInput">
                                    <p>Nazwisko:</p>
                                    <input type="text" value={this.state.lastName} onChange={this.handleChangeLastName} />
                                </div>
                            </label>
                        </div>
                        <div id="registerButton">
                            <i>* wszystkie pola należy uzupełnić aby móc dokonać rejestracji</i>
                            <input type="submit" value="Zarejestruj" disabled={this.state.buttonStatus} />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;