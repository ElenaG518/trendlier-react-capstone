import React, { Component } from "react";
import { connect } from "react-redux";
import requiresLogin from './requires-login';

import Spinner from 'react-spinkit';
import {fetchWishlist} from "../actions/product-data"

import WishlistItem from "./wishlist-item";

class WishList extends Component {
    componentDidMount() {
        const {username} = this.props.match.params;
        console.log("username", username);
        // window.scrollTo(0, 0)
        this.props.dispatch(fetchWishlist(username))
        .then(()=>console.log("wishlist", this.props.wishlist.products));
    };

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        };

        if(!this.props.wishlist){
            return (
            <div>
                <div className="mylist-section" role="region">
                    <h2 className="mylist-title">My Wishlist</h2>
                    <div className="mylist-results">
                        <ul><Spinner spinnername="circle" fadeIn='none' /></ul>
                    </div>
                </div>
            </div>
        	)
        } else {

        const data = this.props.wishlist.products;
        const displayResults = data.map((item, index) => {
            return ( 
            <li key={index}>
                <WishlistItem {...item} />
                <hr id="divideLine" />
            </li>
            )
        });

            return (
                <div>
                    
                    <div className="mylist-section" role="region">
                        <h2 className="mylist-title">My Wishlist</h2>
                        {error}
                        <div className="mylist-results">
                            <ul>{displayResults}</ul>
                        </div>
                    </div>
                </div>
            )
        }
    }    
}

const mapStateToProps = state => ({
    wishlist: state.trendlier.wishlist,
    error: state.trendlier.error
});

export default requiresLogin()(connect(mapStateToProps)(WishList));

