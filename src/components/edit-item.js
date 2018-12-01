import React, { Component } from "react";
import { connect } from "react-redux";
import {editWishlistItem, fetchWishlist} from "../actions/product-data";

export class EditItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            edit: true
        }
       
        this.onSubmit = this.onSubmit.bind(this);
        this.onCancel = this.onCancel.bind(this);
    };

    onSubmit(event) {
        event.preventDefault();
        const eventVal = event.target.notes.value;
         console.log("eventVal and id", eventVal, this.props.id);
        // this.setState({edit: true});
        console.log("onSubmit", this.state.edit);
        this.props.dispatch(editWishlistItem(eventVal, this.props.id))
        .then(()=> this.props.dispatch(fetchWishlist(this.props.loggedInUserName)));

    };

    onCancel(e) {
        this.setState({edit: false});
        console.log("onCancel", this.state.edit);
        
    }

    render() {

        // if (this.state.edit===true) {
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
                    </div>
                    <div className="mylist-section" role="region">
                    <h2 className="mylist-title">Edit Note</h2>
                    <form onSubmit={e =>this.onSubmit(e)}>
                        <fieldset>
                            <label htmlFor="notes"><span className="tag">Note:</span> </label>
                            <textarea name="notes" component="textarea" id="notes" rows="10" cols="40" defaultValue = {`${this.props.notes}`}></textarea>
                            <button type="submit" className="item" >submit</button>
                        </fieldset>
                    </form>
                    <button type="cancel" className="item" >cancel</button>
                    </div>
                </div>
            )
        // } else return null;            
    }
}    

export default connect()(EditItem);

