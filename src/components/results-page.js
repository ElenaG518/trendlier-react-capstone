import React from "react";
import Modal from 'react-modal';
import { connect } from "react-redux";
import Spinner from 'react-spinkit';
import noImage from '../assets/no-image.png';
import { fetchData, clearFetchedData, addItem, fetchWishlist } from "../actions/product-data";
import ResultsItem from './results-item';
import requiresLogin from './requires-login';
import Footer from './footer';

import './results-page.css';

const customStyles = {
    content : {
        width: "280px",
        fontFamily: 'Chakra Petch, sans-serif',
        color: "olive",
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
    }
  };

class ResultsPage extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            shouldAddItem:true
        }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        const username = this.props.username;
        this.props.dispatch(clearFetchedData(null));
        this.props.dispatch(fetchData(id)); 
        this.props.dispatch(fetchWishlist(username));   
    };

    openModal(shouldAddItem) {
        this.setState({modalIsOpen: true,
        shouldAddItem});
    }
    
    closeModal() {
        this.setState({modalIsOpen: false});
    }

    handleItemClicked = (item, text) => {
        let itemImg=null;
        if (item.images.standard===null) {
            itemImg=noImage;
        } else {
            itemImg = item.images.standard;
        };
        const data={
                    image:itemImg,
                    name: item.names.title,
                    purchaseUrl: item.links.web,
                    regularPrice: item.prices.regular,
                    currentPrice: item.prices.current,
                    rating: item.customerReviews.averageScore,
                    reviewsCount: item.customerReviews.count,
                    description: item.descriptions.short,
                    notes: text,            
                    loggedInUserName:this.props.username
                 }
                 
                 let shouldAddItem=true;
                 const wishlistItems = this.props.wishlist.products;
                 wishlistItems.forEach(wishlistItem => {
                    if (wishlistItem.name === data.name) {
                        shouldAddItem=false;
                    }
                 })
                 if (shouldAddItem) {
                 this.props.dispatch(addItem(data))
                 .then(() => {this.openModal(shouldAddItem);
                    this.props.dispatch(fetchWishlist(this.props.username))}
                 );  
                } else {
                    this.openModal(shouldAddItem);
                }
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        };
        
        if (this.props.loading) {
            return (
            <div >
                <h2 className="section-title">results</h2>
                <div id="search-results" aria-live="assertive">
                    <ul className="row">
                        <li>
                            <Spinner spinnername="circle" fadeIn='none' />
                        </li>
                    </ul>
                </div>
            </div>
         
            )
        } else {
            const results = this.props.fetchedData;
            const displayResult = results.map((item, index) => {

                return (
                    <li key={index}>
                        <ResultsItem item={item}  onItemClicked={this.handleItemClicked} />
                        
                    </li>
                    )
            });
 
            let msg = this.state.shouldAddItem ? "Item has been added to wishlist": "item is already in wishlist";
            

            return (
                <div>
                <section className="results">
                <h2>Trending Items</h2>
                <div className="item">   
                {error}
                {displayResult}
                <Modal 
                            isOpen={this.state.modalIsOpen}
                            
                            style={customStyles}
                            contentLabel={msg}
                >
                            <p className="modal-p">{msg}</p>
                            <div className="modal-buttons-div">
                                <button className="modal-btn" onClick={this.closeModal}>ok</button>
                                
                            </div>
                            </Modal>
                </div>
                </section>
                <Footer /> 
                </div>
            );
        }
    }
}
       
const mapStateToProps = state => {
    return {
        loading: state.trendlier.loading,
        fetchedData: state.trendlier.fetchedData, 
        error: state.trendlier.error,
        username: state.auth.currentUser.username,
        wishlist: state.trendlier.wishlist
    }
};

export default requiresLogin()(connect(mapStateToProps)(ResultsPage));

