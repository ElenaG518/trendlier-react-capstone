import React, { Component } from "react";
import { connect } from "react-redux";
// import {withRouter} from "react-router-dom";
import {addItem} from "../actions/product-data";
import AddForm from './add-form';

export class ResultsItem extends Component {
    
    addListItem(text) {
        console.log(text);
        const data={
                    image:this.props.images.standard,
                    name: this.props.names.title,
                    purchaseUrl: this.props.links.web,
                    regularPrice: this.props.prices.regular,
                    currentPrice: this.props.prices.current,
                    rating: this.props.customerReviews.averageScore,
                    reviewsCount: this.props.customerReviews.count,
                    description: this.props.descriptions.short,
                    notes: text,            
                    loggedInUserName:this.props.username
                 }
                 console.log("data", data); 
                 this.props.dispatch(addItem(data))
                 .then(()=> alert("item added to wishlist"));    
    }

   render() {
        
        return (
            <div>
                <div className="picture">
                    <img src={`${this.props.images.standard}`} alt={`${this.props.names.title}`} />
                    <span>{this.props.rank}</span>
                </div>
                <h3>{this.props.names.title}</h3>
                <div className="item-description">
                    <p><span className="tag">Regular Price:  </span>{this.props.prices.regular}</p>
                    <p><span className="tag">Current Price:  </span> {this.props.prices.current}</p>
                    <p><span className="tag">Average Rating:  </span>{this.props.customerReviews.averageScore}</p>
                    <p><span className="tag">Number of Reviews:   </span>{this.props.customerReviews.count}</p>
                    <p><span className="tag">Description:   </span>{this.props.descriptions.short}</p>
                    <AddForm type="resultsItem"
                        onAdd={text => this.addListItem(text)}
                    />
                    <a href={`${this.props.links.web}`} target="_blank" rel="noopener noreferrer" className="purchase">
                    purchase</a>  
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    username: state.auth.currentUser.username
});

export default connect(mapStateToProps)(ResultsItem);


