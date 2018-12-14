import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
import { Link} from 'react-router-dom';


export class LoginForm extends React.Component {
    
    onSubmit(values) {
        return this.props
        .dispatch(login(values.username, values.password))
        .then(() => this.props.history.push(`/search-page`));
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

        
        return (
            <div className="back-img">
            <div className="transparent">
            <h2 className="auth">Sign In</h2>
                <form
                    className="login-form"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    {error}
                    <fieldset>
                    
                    <label htmlFor="username">Username</label>
                    <Field
                        component={Input}
                        type="text"
                        name="username"
                        placeholder="username"
                        
                        id="username"
                        validate={[required, nonEmpty]}
                    />
                    <label htmlFor="password">Password</label>
                    <Field
                        component={Input}
                        type="password"
                        name="password"
                        placeholder="password"
                        
                        id="password"
                        validate={[required, nonEmpty]}
                    />
                    <button id="login-button" disabled={this.props.pristine || this.props.submitting}>
                        Log in
                    </button>
                    </fieldset>
                </form>
             
                <Link to="/auth/signup" className="signup-anchor">Sign up</Link>
            </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);