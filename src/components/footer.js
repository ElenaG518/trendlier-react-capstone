import React, { Component } from "react";
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import './footer.css';

export class Footer extends Component {

    render() {

        // Only render the footer if we are logged in
        
        return (
          <footer>
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
            
        <div className="row">
            <p>
                &copy; 2018 Elena Granados
            </p>
            <p>
                
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