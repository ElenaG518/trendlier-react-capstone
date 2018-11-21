import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
// import Select from './select';
// import requiresLogin from "./requires-login";
// import { connect } from "react-redux";
import { setCategory} from '../actions/index';
// import { Redirect } from "react-router-dom";

export class SearchForm extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = { category: "abcat0204000",
    //                     counter: 1 
    //                 };
        

    //     this.onSetCategory = this.onSetCategory.bind(this);
    //     this.onSearchClick = this.onSearchClick.bind(this);
    // }

    setNewCategory(category) {
        if(category==="Category") {
            alert("Please select a valid category")
        } else {
            console.log(category);
            // console.log(this.state.counter);
            // console.log(this.state.category);
            // this.setState({counter: 2});
            // this.setState({ category: category });
            // console.log(this.state.counter);
            // console.log(this.state.category);
        }            
            // console.log(this.state.category);
            return this.props
            .dispatch(setCategory(category))
            .then(() => this.props.history.push(`/results-page/1234`));
            
            // console.log(this.props.category);
    }       



            
    //         // this.props.history.push(`/results-page/${this.state.category}`)
    //     }
    //     console.log("this", this.state.category);
    //     console.log("this", this.state.counter);
    //     console.log("that", this.props.category);
    // }

    // onSearchClick(event) {
    //     event.prevent.default();
    //     if (this.state.category) {
    //         console.log("this", this.props.category);
    //         this.props.history.push(`/results-page/${this.props.category}`);
    //     }
    // }    
    
   
           
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
            <form className="js-search-form" >                
                <label htmlFor="category" className="search-label">Please select a category from the drop down menu:</label>
                {error}
                <Field name="category" component="select" 
                    onChange={e => this.setNewCategory(e.target.value)}  >
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
                {/* <button onClick={this.onSearchClick} id="search-button" className="button search-button">search</button> */}
            </form>
        );
    }
}

// export const mapStateToProps = state => ({
//     category: state.category,
//     data: state.data,
//     error: state.error
// });

// export requiresLogin()(connect(mapStateToProps)(SearchForm));

export default reduxForm({
    form: 'search',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('search', Object.keys(errors)[0]))
})(SearchForm);
