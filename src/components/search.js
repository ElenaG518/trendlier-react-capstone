import React from 'react';
import {connect} from 'react-redux';
import { Redirect} from 'react-router-dom';

import  SearchForm  from './search-form';

export function Search(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (!props.loggedIn) {
        return <Redirect to ="/" />;
    }
    return (
        <div className="search-form">
            
            <SearchForm />
            
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Search);