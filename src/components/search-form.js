import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';

import requiresLogin from "./requires-login";


export  class SearchForm extends React.Component {
    
    onSubmit(values) {
        console.log("values", values);
        // return this.props.history.push(`/results-page/${values}`);
                
    }

    render() {   
               
        return (
            <form className="js-search-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values))}> 
                    <label htmlFor="category" className="search-label">Please select a category from the drop down menu:</label>
               
                <Field name="category" component="select" id="category">
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
                </Field>
                <button id="search-button" disabled={this.props.pristine || this.props.submitting}>
                    search
                </button>
            </form>
            
        );
    }
}

export default requiresLogin()(reduxForm({
    form: 'search',
    onSubmitFail: (errors, dispatch) => dispatch(focus('category'))
})(SearchForm));

