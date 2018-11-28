import React, { Component } from "react";
import { connect } from "react-redux";

export class WishlistItem extends Component {

    // onClick(id) {
    //     console.log("id", id);
    //     // this.props.dispatch(editItemNote())
    // }

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
            {/* <button className="edit-note" onClick={this.props.onClick(this.props.id)}><li>edit note</li></button> */}
            <a href={`${this.props.purchaseUrl}`} target="_blank" rel="noopener noreferrer" className="purchase">purchase</a>
            <button className="delete-item" data={`${this.props.id}`}><li>delete item</li></button>
            </ul>
                
            </div>
        )
    }
}



export default connect()(WishlistItem);
