import React, { Component } from "react";

export default class ResultsItem extends Component {
    constructor(props) {
        super(props);

        this.clickControl = this.clickControl.bind(this);
    };

    clickControl(e){
//        e.preventDefault();
        e.stopPropagation();
        return false
    }

    render() {

        const productTitle = this.props.names.title;
        const images = this.props.images.standard;
        const rank = this.props.rank;
        const regular = this.props.prices.regular;
        const current = this.props.prices.current;
        const averageScore = this.props.customerReviews.averageScore;
        const count = this.props.customerReviews.count;

        return (
            <div>
            <div className="picture">
              <img src={`${images}`} alt={`${productTitle}`} />
              <span>{rank}</span>
          </div>
          <h3>{productTitle}</h3>
          <div className="item-description">
              <p><span className="tag">Regular Price:  </span>{regular}</p>
              <p><span className="tag">Current Price:  </span> {current}</p>
              <p><span className="tag">Average Rating:  </span>{averageScore}</p>
              <p><span className="tag">Number of Reviews:   </span>{count}</p>
          </div>
          </div>
    )

}

}
