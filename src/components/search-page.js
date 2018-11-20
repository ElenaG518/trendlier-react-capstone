import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import HeaderBar from './header-bar';
import  SearchForm  from './search-form';
// import {categorySearch} from '../actions/protected-data';


export class SearchPage extends React.Component {
    // componentDidMount() {
    //     this.props.dispatch(categorySearch(this.props.category));
    // }

    render() {
       return (
        <div className="content ">
          {/* <HeaderBar/> */}
            <h1>Search Form</h1>
            <SearchForm />
            
        </div>
        );
    }
}    

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default requiresLogin()(connect(mapStateToProps)(SearchPage));
