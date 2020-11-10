import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../styles/MainContent.css';
import Home from './Home';
import Login from './Login';
import CustomerPanel from './CustomerPanel';
import Register from './Register';

function MainContent() {
    return (
        <Router>
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