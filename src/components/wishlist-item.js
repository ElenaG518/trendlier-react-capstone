import React, { Component } from "react";
import { connect } from "react-redux";

import EditForm from './edit-form';

import {editWishlistItem,
        deleteWishlistItem,
        fetchWishlist
} from "../actions/product-data";

export class WishlistItem extends Component {
    editListItem(text) {
        console.log("text",  text);
        this.props.dispatch(editWishlistItem(text, this.props.id))
        .then(()=> this.props.dispatch(fetchWishlist(this.props.loggedInUserName)));
    }

    onDeleteClick(e) {
        const { id, loggedInUserName } = this.props;
        console.log("wishlist item props", this.props);  
        console.log("onDelete", id, loggedInUserName);
        const result = window.confirm("Are you sure you want to delete this item from the wishlist?");
        console.log(result);
        if (result=== true) {
                this.props.dispatch(deleteWishlistItem(id))
            .then(() => this.props.dispatch(fetchWishlist(loggedInUserName)))
        }

    }  

    render() {
        
            return (
                <div>                
                    <div className="picture">
                        <img src={`${this.props.image}`} alt={`${this.props.name}`} />
                    </div>
                    <h3>{this.props.name}</h3>
                    <div className="item-description">
                        <p><span className="tag">Regular Price:  </span>{this.props.regularPrice}</p>
                        <p><span className="tag">Current Price:  </span> {this.props.currentPrice}</p>
                        <p><span className="tag">Average Rating:  </span>{this.props.rating}</p>
                        <p><span className="tag">Number of Reviews:   </span>{this.props.reviewsCount}</p>
                        <p><span className="tag">Description:   </span>{this.props.description}</p>
                        <p><span className="tag">notes:   </span>{this.props.notes}</p>
                    </div>
                        <EditForm type="wishlistItem"
                         onEdit={text => this.editListItem(text)}
                         {...this.props}
                         />
                        <li><a href={`${this.props.purchaseUrl}`} target="_blank" rel="noopener noreferrer" className="purchase">purchase</a></li>
                        <li><button className="delete-item" onClick={e => this.onDeleteClick(e)}>delete item</button></li>
                </div>
            )    
        }
}    

export default connect()(WishlistItem);

