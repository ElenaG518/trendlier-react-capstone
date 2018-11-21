import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from 'react-spinkit';
import { fetchMyList } from "../actions/fetch-data";
import ListShow from "./list-show";


class MyList extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.fetchMyList();
    };



    render() {
        if(!this.props.mylist){
            return (
            <div>
                
                <div className="mylist-section" role="region">
                    <h2 className="mylist-title">My Wishlist</h2>
                    <div className="mylist-results">
                        <ul><Spinner spinnername="circle" fadeIn='none' /></ul>
                    </div>
                </div>
            </div>
        	)
        }

        const data = this.props.mylist;

        const displayResults = data.map((item, index) =>
            <li key={index}>
                <ListShow {...item} />
                <hr id="divideLine" />
            </li>
        );

        return (
            <div>
                
                <div className="mylist-section" role="region">
                    <h2 className="mylist-title">My List</h2>
                    <div className="mylist-results">
                        <ul>{displayResults}</ul>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps({ mylist }, ownProps) {
  return mylist ;
}

export default connect(mapStateToProps, { fetchMyList })(MyList);

