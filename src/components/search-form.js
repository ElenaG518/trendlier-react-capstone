import React from 'react';
// import {Field, reduxForm, focus} from 'redux-form';
// import { setCategory} from '../actions/product-data';
import { connect } from "react-redux";
import requiresLogin from "./requires-login";


export  class SearchForm extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = { term: "" };

        this.onInputChange = this.onInputChange.bind(this);
        this.onSearchClick = this.onSearchClick.bind(this);
    }
    
    onInputChange(event) {
        this.setState({ term: event.target.value });
        
    }

    onSearchClick(e) {
        if(this.state.term) {
            this.props.history.push(`/results-page/${this.state.term}`);
        }
    }
    render() {   
               
        return (
            <form className="js-search-form"
             onSubmit={this.onSearchClick} >                
                <label htmlFor="category" className="search-label">Please select a category from the drop down menu:</label>
               
                <select name="category" component="select" id="category"
                    onChange={this.onInputChange}    >
                    <option>Category</option>
                    <option value="abcat0401000">Digital Cameras</option>
                    <option value="pcmcat242800050021">Health, Fitness and Beauty</option>
                    <option value="abcat0204000">Headphones</option>
                    <option value="pcmcat241600050001">Home Audio</option>
                    <option value="pcmcat254000050002">Home Automation and Security</option>
                    <option value="pcmcat209000050006">iPad, Tablets and E-Readers</option>
                    <option value="abcat0502000">Laptops</option>
                    <option value="pcmcat310200050004">Portable and Wireless Speakers</option>
                    <option value="abcat0101000">TVs</option>
                </select>
                <button id="search-button" disabled={this.props.pristine || this.props.submitting}>
                    search
                </button>
            </form>
        );
    }
}



export default requiresLogin()(connect()(SearchForm));
// export default requiresLogin()(reduxForm({
//     form: 'search',
//     onSubmitFail: (errors, dispatch) => dispatch(focus('category'))
// })(SearchForm));

