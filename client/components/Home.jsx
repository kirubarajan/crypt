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
    browserHistory.push('/accounts');
  }

  render() {
    return (
      <div className="container one-edge-shadow">
        <div className="row align-items-sm-center justify-content-sm-center home-row">
          <div className="col-left col col-md-6 col-sm-12 home-container">
            <h1>SIGN IN</h1>
            <Form onSubmit={this.onLogin.bind(this)} className="home-form">
             <FormGroup>
               <input type="email" name="email" id="exampleEmail" placeholder="Email" ref="email"/>
             </FormGroup>
             <FormGroup>
               <input type="password" name="password" id="examplePassword" placeholder="Password" ref="password"/>
             </FormGroup>
             <Link to='/signup'>
              <Button className="home-button register"><p>REGISTER</p></Button>
            </Link>
               <Button className="home-button signin"><p>SIGN IN</p></Button>
           </Form>
          </div>
          <div className="col-right col col-md-6 col-xs-12">
          </div>
        </div>
     </div>
    )
  }
}

export default Home;
