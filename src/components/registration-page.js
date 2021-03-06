import React from 'react';
import {connect} from 'react-redux';
import { Link, Redirect} from 'react-router-dom';


import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/search-page" />;
    }
    return (
        <div className="back-img">
        <div className="transparent">
        <Link to="/" className="auth"><h2 >Trendlier</h2></Link>
           <h3 >Register</h3>
           <RegistrationForm />
           
           <Link to="/auth/login">Sign in</Link>
        </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);