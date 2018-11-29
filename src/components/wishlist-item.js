import React, { Component } from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom"
import EditItem from "./edit-item";

import {deleteWishlistItem
    // , fetchWishlist
} from "../actions/product-data";

export class WishlistItem extends Component {
    constructor(props) {
        super(props);
		
        this.onEditClick = this.onEditClick.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    };

    onEditClick(e) {
        console.log("Wishlist-item props", this.props);  
        return (<EditItem {...this.props} />)      
    }

    onDeleteClick(e) {
        const { id, loggedInUserName } = this.props;
        console.log("props", this.props);  
        console.log("onDelete", id, loggedInUserName);
        // confirm("Are you sure you want to delete item?");
        this.props.dispatch(deleteWishlistItem(id))
        window.location.reload();
		this.props.history.push(`/wishlist/${loggedInUserName}`);

        // .then(() => this.props.dispatch(fetchWishlist(loggedInUserName)))
        // .then(()=> alert("item has been deleted"));
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
                <ul>
                    <li><button className="edit-note" onClick={this.onEditClick}>edit note</button></li>
                    <li><a href={`${this.props.purchaseUrl}`} target="_blank" rel="noopener noreferrer" className="purchase">purchase</a></li>
                    <li><button className="delete-item" onClick={this.onDeleteClick}>delete item</button></li>
                </ul>
            </div>
        )
    }
}

export default connect()(withRouter(WishlistItem));
