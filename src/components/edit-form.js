import React from 'react';
import {editWishlistItem, fetchWishlist} from "../actions/product-data";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";

export  class EditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
    }

    onSubmit(event) {
        event.preventDefault();
        const text = this.textInput.value.trim();
                
         console.log("text", text);
        // this.textInput.value = '';
        this.props
        .dispatch(editWishlistItem(text, this.props.id))
        .then(()=> this.props.dispatch(fetchWishlist(this.props.loggedInUserName)));
        this.setEditing(false); 
    }

    setEditing(editing) {
        this.setState({
            editing
        });
    }

    render() {
        if (!this.state.editing) {
            console.log("this props", this.props);
            
            
            const text = `Edit wishlist note`;
            return (
                <div className="add-button">
                <button onClick={() => this.setEditing(true)}>
                    {text}
                </button>    
                </div>
            );
        }
        const label = `Edit wishlist item note`;
        return (
            <form className="card add-form" onSubmit={(e) => this.onSubmit(e)}>
           
                <textarea
                    name="notes"
                    id="notes"
                    rows="10" cols="40"
                    defaultValue = {`${this.props.notes}`}
                    type="text"
                    ref={input => this.textInput = input}
                    aria-label={label}
                />
                
            
                <button>submit</button>
                <button type="button" onClick={() => this.setEditing(false)}>
                    Cancel
                </button>
            </form>
        );
    }
}

export default connect()(withRouter(EditForm));