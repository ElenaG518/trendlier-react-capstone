import React from 'react';
import {connect} from 'react-redux';
import { Link} from 'react-router-dom';
import requiresLogin from './requires-login';
import { setCategory} from '../actions/product-data';

export class IntroPage extends React.Component {

    newSearch() {
        this.props.dispatch(setCategory(''));
    };
    
    render() {
        
        return (
            <div className="back-img">
            <div className="transparent">
                <section className="intro">

                    <header role="banner">


                        <h1>Trendlier</h1>

                        <p>Trendlier is for those who like to keep on top of the latest gadgets and trends. </p>
                        <p>Get a list of the top ten hottest items in each category, listed in descending order based on popularity.</p>
                        <p>Purchase your favorites or save them in your wishlist.</p>
                        <div className="button-wrapper">
                        <Link to={`/wishlist/${this.props.username}`} id="wishlist">wishlist</Link>
                        <Link to="/search-page" id="search-page" onClick={() => this.newSearch()}>search</Link>
                        
                        </div>
                    </header>
                </section>
            </div>
            </div>
        );
    }        
}

const mapStateToProps = state => ({
    username: state.auth.currentUser.username
});

export default requiresLogin()(connect(mapStateToProps)(IntroPage));