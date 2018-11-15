import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import SearchForm from './search-form';


export class Search extends React.Component {
    getCategory(category) {
        this.props.dispatch(this.getCategory(category));
    }

    render() {
        return (
            <section className="search">
                <h2>Search Category</h2>
                <SearchForm
                type='text'
                onGetCategory={category => this.getCategory(category)}
                />
            </section>
        );
    }
}

// const mapStateToProps = state => {
//     const {currentUser} = state.auth;
//     return {
//         username: state.auth.currentUser.username,
//         name: `${currentUser.firstName} ${currentUser.lastName}`,
        
//     };
// };

export default requiresLogin()(connect()(Search));
