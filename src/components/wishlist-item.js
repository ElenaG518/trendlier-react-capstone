import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { connect } from "react-redux";
import EditForm from './edit-form';

import {editWishlistItem,
        deleteWishlistItem,
        fetchWishlist
} from "../actions/product-data";

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

export class WishlistItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalIsOpen: false
        };
        
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }
    
    closeModal() {
        this.setState({modalIsOpen: false});
      }

    editListItem(text) {
        console.log("text",  text);
        this.props.dispatch(editWishlistItem(text, this.props.id))
        .then(()=> this.props.dispatch(fetchWishlist(this.props.loggedInUserName)));
    }

    onDeleteClick() {
        const { id, loggedInUserName } = this.props;
        console.log("onDelete", id, loggedInUserName);
        
        this.props.dispatch(deleteWishlistItem(id))
        .then(() => this.props.dispatch(fetchWishlist(loggedInUserName)));
        this.closeModal();
    }  

    render() {
      
            return (
                <div>
                <article>              
                    <div className="picture">
                        <img src={`${this.props.image}`} alt={`${this.props.name}`} />
                    </div>
                    <h3>{this.props.name}</h3>
                    <div className="item-description">
                        <p><span className="tag">Regular Price:  </span>{this.props.regularPrice}</p>
                        <p><span className="tag">Current Price:  </span> {this.props.currentPrice}</p>
                        <p><span className="tag">Average Rating:  </span>{this.props.rating}</p>
                        <p><span className="tag">Number of Reviews:   </span>{this.props.reviewsCount}</p>
                        <p><span className="tag">Description:   </span>{this.props.description}</p>
                        <p className="note"><span className="tag">Notes:   </span>{this.props.notes}</p>
                        <EditForm type="wishlistItem"
                         onEdit={text => this.editListItem(text)}
                         {...this.props}
                         />
                        <button className="delete-item" onClick={this.openModal}>delete item</button>
                        <Modal 
                            isOpen={this.state.modalIsOpen}
                            
                            style={customStyles}
                            contentLabel="Are you sure you want to delete item?"
                        >
                            <p className="modal-p">Are you sure you want to delete item?</p>
                            <div className="modal-buttons-div">
                                <button className="modal-btn" onClick={this.closeModal}>cancel</button>
                                <button className="modal-btn" onClick={this.onDeleteClick}>ok</button>
                            </div>
                            </Modal>
                        <a href={`${this.props.purchaseUrl}`} target="_blank" rel="noopener noreferrer" className="purchase">purchase</a>
                        
                    </div>
                </article>
                </div>
            )    
        }
    }

export default connect()(WishlistItem);

