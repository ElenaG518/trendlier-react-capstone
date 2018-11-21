import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import { Link } from "react-router-dom";
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
const passwordLength = length({min: 4, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
    onSubmit(values) {
        const {username, password, firstName, lastName} = values;
        const user = {username, password, firstName, lastName};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)))
            .then(() => this.props.history.push(`/search-page`));
    }

    render() {
        // if (this.props.loggedIn) {
        //     return <Redirect to="/search-page" />;
        // };

        return (
            <section className="signup">
            <form
                className="signup-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <fieldset>
                    <legend>Sign Up</legend>
                <label htmlFor="firstName">First name</label>
                <Field component={Input} type="text" name="firstName"  placeholder="First name" />
                <label htmlFor="lastName">Last name</label>
                <Field component={Input} type="text" name="lastName" placeholder="Last name"/>
                <label htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    placeholder="username"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    placeholder="password"
                    validate={[required, passwordLength, isTrimmed]}
                />
                <label htmlFor="passwordConfirm">Confirm password</label>
                <Field
                    component={Input}
                    type="password"
                    placeholder="confirm password"
                    name="passwordConfirm"
                    validate={[required, nonEmpty, matchesPassword]}
                />
                <button
                    type="submit" id="signUpButton"
                    disabled={this.props.pristine || this.props.submitting}>
                    Register
                </button>
                </fieldset>
            </form>
            <Link to="/auth/login">Sign in</Link>
            </section>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);