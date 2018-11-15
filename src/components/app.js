import React, { Component } from "react";
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import LandingPage from './landing-page';
import SearchPage from './search';
import  LoginForm  from './login-form';
import  RegistrationForm  from './registration-form';
import Welcome from "./welcome";



// import './app.css';

class App extends Component {
    render() {
        return (
           <Router>
                <div className="app">
                <Route exact path="/dashboard/user" render={ () => <Welcome person={this.props.loggedIn} />}/>
                <header>
                    <h1><Link to="/">Trendlier</Link></h1>
                </header>    
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/auth/login" component={LoginForm} />
                    <Route exact path="/auth/signup" component={RegistrationForm} />
                    <Route exact path="/dashboard/search" render={ () => <SearchPage person={this.props.loggedIn} />} />
                </div>
                </Router>
            
        );
    }
}

export const mapStateToProps = state => ({
    loggedIn: state.currentUser,
    error: state.error
  });
  
  export default connect(mapStateToProps)(App);