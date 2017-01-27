import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link, browserHistory } from 'react-router';


class Signup extends React.Component {
  createAccount(event) {
    event.preventDefault();
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    const passwordMatch = this.refs.passwordMatch.value;

    if (password === passwordMatch) {
      Accounts.createUser({email: email, password: password}, function(error) {
        if (error) {
          console.log(error.reason);
        }
        else {
          console.log(Meteor.userId());
          browserHistory.push('/accounts');
        }
      });
      console.log(Meteor.users.findOne({username: email}));
    }
  }


  render() {
    return (
      <div className="signup one-edge-shadow">
        <div className="signup__form-container row">
          <div className="signup__form col col-sm-12">
            <h1>Sign Up</h1>
            <form onSubmit={this.createAccount.bind(this)}>
              <input type="email" name="email" id="exampleEmail" placeholder="Email" ref="email"/>
              <input type="password" name="password" id="examplePassword" placeholder="Password" ref="password"/>
              <input type="password" name="password" id="examplePassword" placeholder="Repeat Password" ref="passwordMatch"/>
              <button className="create-account home-button"><p>Create Account</p></button>
            </form>
          </div>
        </div>
     </div>
    );
  }
}

export default Signup;
