import React from 'react';
import {connect} from 'react-redux';
import { Link, Redirect} from 'react-router-dom';



export function LandingPage(props)  {
    // If we are logged in redirect straight to the user's search page
    if (props.loggedIn) {
        return <Redirect to="/dashboard/search-page" />;
    }

    return (
        <section className="intro">

        <header role="banner">


            <h1>Trendlier</h1>

            <p>Trendlier is for those who like to keep on top of the latest gadgets and trends. </p>
            <p>Get a list of the top ten hottest items in each category, listed in descending order based on popularity.</p>
            <p>Purchase your favorites or save them in your wishlist.</p>
            <Link to="/auth/login">Sign In</Link>
            <Link to="/auth/signup">Sign Up</Link>

        </header>
    </section>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);




