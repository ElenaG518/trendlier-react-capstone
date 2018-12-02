import React from "react";
import { connect } from "react-redux";
import Spinner from 'react-spinkit';

import { fetchData } from "../actions/product-data";
import ResultsItem from './results-item';
import requiresLogin from './requires-login';

class ResultsPage extends React.Component {    
    componentDidMount() {
        const {id} = this.props.match.params;
        console.log(id);
        this.props.dispatch(fetchData(id));    
    };

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        };

        if (!this.props.fetchedData) {
            return (
            <div >
                <h2 className="section-title">results</h2>
                <div id="search-results" aria-live="assertive">
                    <ul className="row">
                        <li>
                            <Spinner spinnername="circle" fadeIn='none' />
                        </li>
                    </ul>
                </div>
            </div>
         
            )
        } else {
            const results = this.props.fetchedData;
            console.log("results", results);
            const displayResult = results.map((item, index) => {
                return (
                    <li key={index}>
                        <ResultsItem {...item}  />
                    </li>
                    )
            });
 
            return (
                <div className="dashboard-protected-data">   
                {error}
                {displayResult}
                </div>
            );
        }
    }
}
       
const mapStateToProps = state => {
    return {
        fetchedData: state.trendlier.fetchedData, 
        error: state.trendlier.error,
        username: state.auth.currentUser.username
    }
};

export default requiresLogin()(connect(mapStateToProps)(ResultsPage));
