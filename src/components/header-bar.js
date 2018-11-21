import React from 'react';
import {connect} from 'react-redux';
import { Link} from 'react-router-dom';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import requiresLogin from './requires-login';


export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    };

    render() {

        

        // Only render the navigation bar if we are logged in
        

        return (
            <div className="top-menu">
        <nav className="top-navigation" role="navigation">

            <div className="content ">
                <ul className="links ">

                    <li className="logo">Trendlier</li>

                    <li><Link to="/search-page" id="new-category">search</Link></li>
                    <li><Link to="/wishlist" id="wishlist">wishlist</Link></li>
                    <li><button id="logout" onClick={() => this.logOut()}>log out</button></li>

                </ul>
            </div>

        </nav>
    
                
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});



export default requiresLogin()(connect(mapStateToProps)(HeaderBar));

