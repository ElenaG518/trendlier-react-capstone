import React, { Component } from "react";
// import { connect } from "react-redux";
// import {withRouter} from "react-router-dom";
import AddForm from './add-form';

export default class ResultsItem extends Component {

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
                    <AddForm type="list" { ...this.props}/>

                    <a href={`${this.props.links.web}`} target="_blank" rel="noopener noreferrer" className="purchase">
                    purchase</a>  
                </div>
            </div>
        )
    }
}

// const mapStateToProps = state => ({
//     username: state.auth.currentUser.username
// });

// export default connect(mapStateToProps)(ResultsItem);
//export default connect(mapStateToProps)(withRouter(ResultsItem));

