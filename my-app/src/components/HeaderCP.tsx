import React from 'react';
import '../styles/HeaderCP.css';
import userImg from '../resources/user.png'
import { Link } from 'react-router-dom';

function HeaderCP(props: { firstName: React.ReactNode; lastName: React.ReactNode; }) {
    return (
        <div id="headerCP">
            <div id="headerCPText"><h1>SI OWTM</h1></div>
            <div id="headerCPImgDataArea">
                <div id="headerCPData"><i>{props.firstName} {props.lastName}</i></div>
                <div id="headerCPImg"><img src={userImg} alt="User Avatar" /></div>
                <div id="headerCPLogout"><Link to="/logout">Wyloguj</Link></div>
            </div>
        </div>
    );
}

export default HeaderCP;