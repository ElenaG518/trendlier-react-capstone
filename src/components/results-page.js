import React from "react";
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
// import Spinner from 'react-spinkit';
import { fetchData } from "../actions/index";
// import ResultsItem from './results-item';
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

        return (
                <div className="dashboard-protected-data">
                    Category data: {this.props.data};
                    {console.log("this", this.props.data)}
                    {error}
                </div>
            
        );
    }
}
       
const mapStateToProps = state => {
    return {
        data: state.data,
        error: state.error    
    }
    
    
};

export default requiresLogin()(connect(mapStateToProps)(ResultsPage));
