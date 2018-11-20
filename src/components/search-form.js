import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Select from './select';
import {categorySearch} from '../actions/protected-data';



export class SearchForm extends React.Component {
    handleSelectChange(event) {
        event.preventDefault();
        const category = event.target.value;
        return this.props.dispatch(categorySearch(category));
        }
        
    render() {
        return (
            <form className="js-search-form"
            //  onChange={this.handleSelectChange}
            >                
                <label htmlFor="category" className="search-label">Please select a category from the drop down menu:</label>
                <div>
                    <Field name="category" 
                    className="category-name"
                    onChange={this.handleSelectChange}
                    component={Select}
                    type="select"
                    id="category"
                    >
                        <option>Category</option>
                        <option value="abcat0401000">Digital Cameras</option>
                        <option value="pcmcat242800050021">Health, Fitness & Beauty</option>
                        <option value="abcat0204000">Headphones</option>
                        <option value="pcmcat241600050001">Home Audio</option>
                        <option value="pcmcat254000050002">Home Automation & Security</option>
                        <option value="pcmcat209000050006">iPad, Tablets & E-Readers</option>
                        <option value="abcat0502000">Laptops</option>
                        <option value="pcmcat310200050004">Portable & Wireless Speakers</option>
                        <option value="abcat0101000">TVs</option>
                    </Field>
                </div>
            </form>
        );
    }
}


export default reduxForm({
    form: 'search',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('search', Object.keys(errors)[0]))
})(SearchForm);

