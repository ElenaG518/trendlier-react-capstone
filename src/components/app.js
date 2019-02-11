import React, { Component } from "react";
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import LandingPage from './landing-page';
import HeaderBar from './header-bar';
import LoginForm  from './login-form';
import RegistrationPage  from './registration-page';
import SearchPage  from './search-page';
import ResultsPage from './results-page';
import WishList from './wishlist';
import IntroPage from "./intro-page";
import {refreshAuthToken} from '../actions/auth';

export class App extends Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }
 
    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }
    render() {
        return (
           
            <div className="app">
                <HeaderBar title="Trendlier"/>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/intro-page" component={IntroPage} />
                <Route exact path="/auth/login" component={LoginForm} />
                <Route exact path="/auth/signup" component={RegistrationPage} />
                <Route exact path="/search-page" component={SearchPage}/>
                <Route exact path="/results-page/:id" component={ResultsPage} />
                <Route exact path="/wishlist/:username" component={WishList} />
                 
            </div>
       );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));