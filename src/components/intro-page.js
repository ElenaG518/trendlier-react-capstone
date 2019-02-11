import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';

export class IntroPage extends React.Component {


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
                        
                    </header>
                </section>
            </div>
            </div>
        );
    }        
}


export default requiresLogin()(connect()(IntroPage));