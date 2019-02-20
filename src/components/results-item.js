import React, { Component } from "react";
import { connect } from "react-redux";
import noImage from '../assets/no-image.png';
import AddForm from './add-form';
import './results-item.css'

export class ResultsItem extends Component {
    
   render() {

       const {images, names, rank, prices, customerReviews, descriptions, links } = this.props.item;
    let itemImg=null;
        if (images.standard==null) {
            itemImg=noImage;
        } else {
            itemImg = images.standard;
        };    

        return (
            <div className="border">
            <article>
                <div className="picture">
                    <img src={`${itemImg}`}
                    alt={`${names.title}`} />
                    <span>{rank}</span>
                </div>
                <h3>{names.title}</h3>
                <div className="item-description">
                    <p><span className="tag">Regular Price:  $</span>{prices.regular}</p>
                    <p><span className="tag">Current Price:  $</span>{prices.current}</p>
                    <p><span className="tag">Average Rating:  </span>{customerReviews.averageScore}</p>
                    <p><span className="tag">Number of Reviews:   </span>{customerReviews.count}</p>
                    <p><span className="tag">Description:   </span>{descriptions.short}</p>
                    <AddForm type="resultsItem"
                        onAdd={text => this.props.onItemClicked(this.props.item, text)}
                    />
                    <a href={`${links.web}`} target="_blank" rel="noopener noreferrer" className="purchase">
                    purchase</a> 
                    
                </div>
            </article>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    username: state.auth.currentUser.username
});

export default connect(mapStateToProps)(ResultsItem);


