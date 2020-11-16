import React from 'react';
import '../styles/DoctorPanel.css';
import HeaderCP from './HeaderCP';

interface DoctorPanelState {
    firstName: string;
    lastName: string;
}

class DoctorPanel extends React.Component<any, DoctorPanelState> {
    constructor(props: any) {
        super(props);
        this.state = {
            firstName: 'Adam',
            lastName: 'Padżet'
        };
    }

    render() {
        return (
            <>
                <div id="doctorPanel">
                    <HeaderCP firstName={this.state.firstName} lastName={this.state.lastName} isDoctor={true}/>

                    <div id="doctorPanelContent">
                        <div className="doctorPanelBlock left">
                            <div className="blockTopic"><h2>Kalendarz wizyt</h2></div>
                        </div>
                        <div className="doctorPanelBlock right top">
                            <div className="blockTopic"><h2>Najbliższa wizyta</h2></div>
                        </div>
                        <div className="doctorPanelBlock right bottom">
                            <div className="blockTopic"><h2>Historia wizyt</h2></div>
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

export default DoctorPanel;