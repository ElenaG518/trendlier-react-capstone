import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import  SearchForm  from './search-form';


export class SearchPage extends React.Component {
    
    render() {
       return (
        <div className="content ">
            <h1>Search Form</h1>
            <SearchForm />
            
        </div>
        );
    }
}    

export default requiresLogin()(connect()(SearchPage));

