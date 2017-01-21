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
      console.log('creating account...');
      Accounts.createUser({email: email, password: password}, function(error) {
        if (error) {
          console.log(error.reason);
        }
        else {
          console.log(Meteor.userId());
          browserHistory.push('/core');
        }
      });
      console.log(Meteor.users.findOne({username: email}));
    }
  }
  render() {
    return (
      <div className="container one-edge-shadow">
        <div className="row align-items-sm-center justify-content-sm-center">
          <div className="col col-sm-6 offset-sm-3">
            <h1 className="header-signup">SIGN UP</h1>
            <Form onSubmit={this.createAccount.bind(this)}>
              <FormGroup>
                <input type="email" name="email" id="exampleEmail" placeholder="Email" ref="email"/>
              </FormGroup>
              <FormGroup>
                <input type="password" name="password" id="examplePassword" placeholder="Password" ref="password"/>
              </FormGroup>
              <FormGroup>
                <input type="password" name="password" id="examplePassword" placeholder="Repeat Password" ref="passwordMatch"/>
              </FormGroup>
              <Button className="create-account">CREATE ACCOUNT</Button>
            </Form>
          </div>
        </div>
     </div>
    );
  }
}

export default Signup;
