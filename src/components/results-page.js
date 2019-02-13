import React from "react";
import { connect } from "react-redux";
import Spinner from 'react-spinkit';
import noImage from '../assets/no-image.png';
import { fetchData, clearFetchedData, addItem, fetchWishlist } from "../actions/product-data";
import ResultsItem from './results-item';
import requiresLogin from './requires-login';
import Footer from './footer';

import './results-page.css'

class ResultsPage extends React.Component {    
    componentDidMount() {
        const {id} = this.props.match.params;
        const username = this.props.username;
        this.props.dispatch(clearFetchedData(null));
        this.props.dispatch(fetchData(id)); 
        this.props.dispatch(fetchWishlist(username));   
    };

    handleItemClicked = (item, text) => {
        let itemImg=null;
        if (item.images.standard===null) {
            itemImg=noImage;
        } else {
            itemImg = item.images.standard;
        };
        const data={
                    image:itemImg,
                    name: item.names.title,
                    purchaseUrl: item.links.web,
                    regularPrice: item.prices.regular,
                    currentPrice: item.prices.current,
                    rating: item.customerReviews.averageScore,
                    reviewsCount: item.customerReviews.count,
                    description: item.descriptions.short,
                    notes: text,            
                    loggedInUserName:this.props.username
                 }
                 
                 let shouldAddItem=true;
                 const wishlistItems = this.props.wishlist.products;
                 wishlistItems.forEach(wishlistItem => {
                    if (wishlistItem.name === data.name) {
                        shouldAddItem=false;
                    }
                 })
                 if (shouldAddItem) {
                 this.props.dispatch(addItem(data))
                 .then(()=> alert("item added to wishlist"));  
                 } else {
                     alert("item is already in wishlist"); 
                 }
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        };
        
        if (!this.props.fetchedData) {
            return (
            <div >
                <h2 className="section-title">results</h2>
                <div id="search-results" aria-live="assertive">
                    <ul className="row">
                        <li>
                            <Spinner spinnername="circle" fadeIn='none' />
                        </li>
                    </ul>
                </div>
            </div>
         
            )
        } else {
            const results = this.props.fetchedData;
            const displayResult = results.map((item, index) => {

                return (
                    <li key={index}>
                        <ResultsItem item={item}  onItemClicked={this.handleItemClicked} />
                        
                    </li>
                    )
            });
 
            return (
                <div>
                <section className="results">
                <h2>Trending Items</h2>
                <div className="item">   
                {error}
                {displayResult}
                </div>
                </section>
                <Footer /> 
                </div>
            );
        }
    }
}
       
const mapStateToProps = state => {
    return {
        fetchedData: state.trendlier.fetchedData, 
        error: state.trendlier.error,
        username: state.auth.currentUser.username,
        wishlist: state.trendlier.wishlist
    }
};

export default requiresLogin()(connect(mapStateToProps)(ResultsPage));

