import React, { Component } from "react";
// import { connect } from "react-redux";
import EditForm from './edit-form';

export default class EditItem extends Component {
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
                </div>
                <div className="mylist-section" role="region">                
                    <EditForm type="list" { ...this.props}/>
                </div>
            </div>
        )        
    }
}    

// export default connect()(EditItem);

