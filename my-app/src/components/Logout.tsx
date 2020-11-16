import React from 'react';
import '../styles/Logout.css';
import Header from './Header';

function Logout(){
    
    // componentDidMount() {
    //     fetch('http://jsonplaceholder.typicode.com/users')
    //         .then(res => res.json())
    //         .then((data) => {
    //             this.setState({ contacts: data })
    //         })
    //         .catch(console.log)
    //         console.log(this.state.contacts)
    // }

    return(
        <>
            <Header />
            <h1>Pomyślnie wylogowano!</h1>
        </>
    );
}

export default Logout;