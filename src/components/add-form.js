import React from 'react';
import {addItem} from "../actions/product-data";
import { connect } from "react-redux";

export class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            adding: false
        }
    }

    onSubmit(event) {
        event.preventDefault();
        console.log("props", this.props);
        const text = this.textInput.value.trim();
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
        this.textInput.value = '';
        
        this.props
        .dispatch(addItem(data));
        this.setAdding(false);
         

    }

    setAdding(adding) {
        this.setState({
            adding
        });
    }

    render() {
        if (!this.state.adding) {
            const text = `Add item to wishlist`;
            return (
                <div className="add-button">
                <button onClick={() => this.setAdding(true)}>
                    {text}
                </button>    
                </div>
            );
        }
        const label = `Add a note to wishlist item`;
        return (
            <form className="card add-form" onSubmit={(e) => this.onSubmit(e)}>
                <textarea
                    type="text"
                    ref={input => this.textInput = input}
                    aria-label={label}
                    placeholder ="Add note..."
                />
                <button>Add item</button>
                <button type="button" onClick={() => this.setAdding(false)}>
                    Cancel
                </button>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    username: state.auth.currentUser.username
});

export default connect(mapStateToProps)(AddForm);
