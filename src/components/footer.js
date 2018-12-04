import React, { Component } from "react";
import {connect} from 'react-redux';
import requiresLogin from './requires-login';

export class Footer extends Component {

    render() {

        // Only render the footer if we are logged in
        
        return (
          <footer>
            <div className="row">
            <div className="col span-1-of-2">
                <ul className="social-links">
                    <li>
                        <a href="https://www.facebook.com/ElenaG518" rel="noopener noreferrer" target="_blank">
                            <ion-icon id="ion-social-facebook" name="logo-facebook"></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/party518" rel="noopener noreferrer" target="_blank">
                            <ion-icon id="ion-social-instagram" name="logo-instagram"></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:elenag518@gmail.com" rel="noopener noreferrer" target="_blank">
                            <ion-icon id="ion-social-email" name="mail"></ion-icon>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="row">
            <p>
                &copy; 2018 Elena Granados
            </p>
            <p>
                {/* built with
                <ion-icon id="heart-icon" name="heart"></ion-icon> &amp; <ion-icon id="musical-note" name="musical-note"></ion-icon>NoVa, */}
                 December 2018
            </p>
        </div>
       </footer>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default requiresLogin()(connect(mapStateToProps)(Footer));