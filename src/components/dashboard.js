import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {categorySearch} from '../actions/protected-data';

import HeaderBar from './header-bar';
// import SearchPage from './search';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(categorySearch(this.props.category));
    }

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
                <div className="dashboard-protected-data">
                    Protected data: {this.props.protectedData}
                </div>
                <HeaderBar/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data,
        category: state.protectedData.category
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
