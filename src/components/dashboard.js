import React from 'react';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';

import HeaderBar from './header-bar';
import SearchPage from './search-page';

export class Dashboard extends React.Component {
    // componentDidMount() {
    //     this.props.dispatch(fetchProtectedData());
    // }
   

    render() {
        return (
            <div className="dashboard">
                {/* <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
                <div className="dashboard-protected-data">
                    Protected data: {this.props.protectedData}
                </div> */}
                <HeaderBar/>
                <SearchPage />
            </div>
        );
    }
}


export default requiresLogin()(Dashboard);
