import React, { Component } from "react";
import { connect } from "react-redux";
import requiresLogin from './requires-login';
import Footer from './footer';

import Spinner from 'react-spinkit';
import {fetchWishlist} from "../actions/product-data"

import WishlistItem from "./wishlist-item";

class WishList extends Component {
    componentDidMount() {
        const {username} = this.props.match.params;
        console.log("username", username);
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

        if(this.props.loadingWishlist){
            return (
            <div>
                <h2 className="mylist-title">My Wishlist</h2>
                <div className="mylist-results">
                    <ul>
                        <li>
                            <Spinner spinnername="circle" fadeIn='none' />
                        </li>        
                    </ul>
                </div>
            </div>
            
        	)
        } else {
            const data = this.props.wishlist.products;
            let displayResults;
            console.log(data.length);
            if (data.length) {
                displayResults = data.map((item, index) => {
                    return ( 
                    <li key={index}>
                        <WishlistItem {...item} />
                    </li>
                    )
                });
            } 
        
            return (
                <div className={data.length ? "" : "separate"}>
                <section className="wish-list">
                    <h2 >My Wishlist</h2>
                   
                    {error}
                    
                    {
                        data.length ? (
                            <ul>{displayResults}</ul>
                        ) : (
                            <div className="message">No items have been added.</div>
                        )
                    }
                    
                </section>
                <Footer /> 
               
                </div>
            )
        }
    }    
}

const mapStateToProps = state => ({
    loadingWishlist: state.trendlier.loadingWishlist,
    wishlist: state.trendlier.wishlist,
    error: state.trendlier.error
});

export default requiresLogin()(connect(mapStateToProps)(WishList));

