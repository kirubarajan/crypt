import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link, browserHistory } from 'react-router';

class Login extends React.Component {

  componentWillMount() {

    if (Meteor.userId()) {

      browserHistory.push('/accounts');

    }

  }

  onLogin(event) {
    event.preventDefault();
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    console.log(email, password);
    Meteor.loginWithPassword(email, password);
    browserHistory.push('/accounts');
  }

  render() {
    return (
      <div className=" logincontainer one-edge-shadow">
        <div className="row">

          <div className="col col-md-6 col-sm-12">
            <h1>Login</h1>
            <Form onSubmit={this.onLogin.bind(this)} className="home-form">
             <FormGroup>
               <input type="email" name="email" id="exampleEmail" placeholder="Email" ref="email"/>
             </FormGroup>
             <FormGroup>
               <input type="password" name="password" id="examplePassword" placeholder="Password" ref="password"/>
             </FormGroup>

             <Button className="home-button signin"><p>Enter</p></Button>
             <Link to='/signup'>
              <Button className="home-button register"><p>Reigster</p></Button>
            </Link>
           </Form>
          </div>

          <div className="col col-md-6 col-xs-12">
          </div>
        </div>
     </div>
    )
  }
}

export default Login;
