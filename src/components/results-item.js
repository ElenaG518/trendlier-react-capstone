import React, { Component } from "react";
import { connect } from "react-redux";
import {addItem} from "../actions/product-data"
import {withRouter} from "react-router-dom"


export class ResultsItem extends Component {

    onSubmit(event) {
        event.preventDefault();
        // console.log("values", event.currentTarget.value);
         const eventVal = event.target.notes.value;
         console.log("eventVal", eventVal);

         const data={
            image:this.props.images.standard,
            name: this.props.names.title,
            regular: this.props.prices.regular,
            current: this.props.prices.current,
            averageScore: this.props.customerReviews.averageScore,
            count: this.props.customerReviews.count,
            description: this.props.descriptions.short,
            note: eventVal,
            itemPurchaseLink: this.props.links.web,
            user:this.props.username
         }
         
         console.log("data", data);

        return this.props
        .dispatch(addItem(data))
        .then(()=> this.props.history.push(`/wishlist/${this.props.username}`)); 
    
    }
    
   render() {
        
        return (
            <div>
                <form className="add-note" onSubmit={e =>this.onSubmit(e)}>
                        
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
                    
                        <fieldset>
                            <label htmlFor="notes"><span className="tag">Note:</span> </label>
                            <textarea name="notes" component="textarea" id="notes" rows="10" cols="40" placeholder="note.."></textarea>
                            <button type="submit" className="item" index={`${this.props.index}`}>add to wishlist</button>
                        </fieldset>
                        </div>
                    </form>
                <a href={`${this.props.links.web}`} target="_blank" rel="noopener noreferrer" className="purchase">
                purchase</a>  
            </div>
        )
    }
}

const mapStateToProps = state => ({
    username: state.auth.currentUser.username
});

export default connect(mapStateToProps)(withRouter(ResultsItem));

