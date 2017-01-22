import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link, browserHistory } from 'react-router';

class Home extends React.Component {

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
    browserHistory.push('/core');
  }

  render() {
    return (
      <div className="container one-edge-shadow">
        <div className="row align-items-sm-center justify-content-sm-center">
          <div className="col-left col col-sm-6">
            <h1>SIGN IN</h1>
            <Form onSubmit={this.onLogin.bind(this)}>
             <FormGroup>
               <input type="email" name="email" id="exampleEmail" placeholder="Email" ref="email"/>
             </FormGroup>
             <FormGroup>
               <input type="password" name="password" id="examplePassword" placeholder="Password" ref="password"/>
             </FormGroup>
             <Link to='/signup'>
              <Button className="register">REGISTER</Button>
              </Link>
               <Button className="signin">SIGN IN</Button>
           </Form>
          </div>
          <div className="col-right col col-sm-6">
          </div>
        </div>
     </div>
    )
  }
}

export default Home;
