import React from 'react';
import '../styles/CustomerPanel.css';
import userAvatar from '../resources/userpng.png';

interface CustomerPanelState {
    firstName: string;
    lastName: string;
}

class CustomerPanel extends React.Component<any, CustomerPanelState> {
    constructor(props: any) {
        super(props);
        this.state = {
            firstName: 'Adam',
            lastName: 'Padżet'
        };

    }

    render() {
        return (
            <div id="customerPanel">
                <div id="header">
                    <div id="headerText"><h1>SI OWTM</h1></div>
                    <div id="headerImg"><img src={userAvatar} alt="User Avatar" /></div>
                    <div id="headerData"><i>{this.state.firstName} {this.state.lastName}</i></div>
                </div>

                <div id="customerPanelContent">
                    <div id="customerPanelBlock" className="left top">
                        <h2>Subskrypcja</h2>
                    </div>
                    <div id="customerPanelBlock" className="right top">
                        <h2>Wizyta</h2>
                    </div>
                    <div id="customerPanelBlock" className="left bottom">
                        <h2>Lista wizyt</h2>
                    </div>
                    <div id="customerPanelBlock" className="right bottom">
                        <h2>Historia leczenia</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomerPanel;