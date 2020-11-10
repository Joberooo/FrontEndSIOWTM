import React from 'react';
import '../styles/CustomerPanel.css';
import HeaderCP from './HeaderCP';

interface CustomerPanelState {
    firstName: string;
    lastName: string;
}

class CustomerPanel extends React.Component<any, CustomerPanelState> {
    constructor(props: any) {
        super(props);
        this.state = {
            firstName: 'Adam',
            lastName: 'Padżet',
        };
    }

    render() {
        return (
            <>
                <div id="customerPanel">
                    <HeaderCP firstName={this.state.firstName} lastName={this.state.lastName} />

                    <div id="customerPanelContent">
                        <div className="customerPanelBlock left top">
                            <div className="blockTopic"><h2>Subskrypcja</h2></div>
                        </div>
                        <div className="customerPanelBlock right top">
                            <div className="blockTopic"><h2>Wizyta</h2></div>
                        </div>
                        <div className="customerPanelBlock left bottom">
                            <div className="blockTopic"><h2>Lista wizyt</h2></div>
                        </div>
                        <div className="customerPanelBlock right bottom">
                            <div className="blockTopic"><h2>Historia leczenia</h2></div>
                        </div>
                    </div>
                    <div id="circle">
                        <div id="lineOne"></div>
                        <div id="lineTwo"></div>
                        <div id="square"></div>
                    </div>
                </div>
            </>
        );
    }
}

export default CustomerPanel;