import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import '../styles/MainContent.css';
import Home from './Home';
import Login from './Login';
import CustomerPanel from './CustomerPanel';
import Register from './Register';

function MainContent() {
    return (
        <Router>
            <div id="header">
                <div id="headerText"><Link to="/"><h1>SI OWTM</h1></Link></div>
                <div id="headerNav">
                    <ul>
                        <li>
                            <Link to="/">Strona Główna</Link>
                        </li>
                        <li>
                            <Link to="/login">Zaloguj</Link>
                        </li>
                        <li>
                            <Link to="/register">Zarejestruj</Link>
                        </li>
                        <li>
                            <Link to="/customerPanel">Panel Klienta</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="content">
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/customerPanel">
                        <CustomerPanel />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default MainContent;