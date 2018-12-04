import React from 'react';
import {connect} from 'react-redux';
import { Link} from 'react-router-dom';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import requiresLogin from './requires-login';
import { setCategory} from '../actions/product-data';


import './header-bar.css';

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    };

    newSearch() {
        this.props.dispatch(setCategory(''));
    };

    render() {

        // Only render the navigation bar if we are logged in
        
        return (
            <div className="top-menu">
                <h1 className="logo">{this.props.title}</h1>
                <nav className="top-navigation" role="navigation">
                {/* <div className="content "> */}
                    <ul className="links "><li><Link to={`/wishlist/${this.props.username}`} id="wishlist">wishlist</Link></li>
                        <li><Link to="/search-page" id="search-page" onClick={() => this.newSearch()}>search</Link></li>
                        <li><button id="logout" onClick={() => this.logOut()}>log out</button></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    category: state.trendlier.category,
    username: state.auth.currentUser.username
});



export default requiresLogin()(connect(mapStateToProps)(HeaderBar));

