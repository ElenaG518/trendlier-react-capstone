import React from 'react';
import {connect} from 'react-redux';
import { Link, Redirect} from 'react-router-dom';



export function LandingPage(props)  {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/in/search" />;
    }

    return (
        <section className="intro">

        <header role="banner">


            {/* <h1>Trendlier</h1> */}

            <p>Trendlier is for those who like to keep on top of the latest gadgets and trends. </p>
            <p>Get a list of the top ten hottest items in each category, listed in descending order based on popularity.</p>
            <p>Purchase your favorites or save them in your wishlist.</p>
            <Link to="/users/login">Sign In</Link>
            <Link to="/users/create">Sign Up</Link>

        </header>
    </section>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.currentUser 
});

export default connect(mapStateToProps)(LandingPage);




