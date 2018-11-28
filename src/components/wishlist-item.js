import React, { Component } from "react";
import { connect } from "react-redux";

export class WishlistItem extends Component {
    constructor(props) {
        super(props);
		
        this.onEditClick = this.onEditClick.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    };


    onEditClick(e) {
        const { id } = this.props;
        console.log("onEdit", id);
        // this.props.dispatch(editItemNote())
    }

    onDeleteClick(e) {
        const { id } = this.props;
        console.log("onDelete", id);
        // this.props.dispatch(deleteItemNote())
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



export default connect()(WishlistItem);
