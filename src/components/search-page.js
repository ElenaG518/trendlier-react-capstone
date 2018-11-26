import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
// import  SearchForm  from './search-form';
// import { Redirect} from 'react-router-dom';

export class SearchPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = { term: "" };

        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onInputChange(event) {
        this.setState({ term: event.target.value });
        console.log(this.state.term)
    }

    onSubmit(e) {
        e.preventDefault();
        if(this.state.term) {
            this.props.history.push(`/results-page/${this.state.term}`);
        }
    }
    render() {   
               
        return (
            <form className="js-search-form"
             onSubmit={this.onSubmit} >                
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



export default requiresLogin()(connect()(SearchPage));











    
//         return (
//             <div className="content ">
//                 <h1>Search Form</h1>
//                 <SearchForm />
//             </div>
//         );
    
// }    

// const mapStateToProps = state => ({
//     category: state.trendlier.category
// });

// export default requiresLogin()(connect()(SearchPage));

