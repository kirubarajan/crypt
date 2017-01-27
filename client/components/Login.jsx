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
      <div className="login one-edge-shadow">
        <div className="login__wrapper row">

          <div className="login__form col col-md-6 col-sm-12">
            <h1>Login</h1>
            <form onSubmit={this.onLogin.bind(this)} className="home-form">
              <input type="email" id="exampleEmail" placeholder="Email" ref="email"/>
              <input type="password" id="examplePassword" placeholder="Password" ref="password"/>
              <br />
              <button className="home-button signin"><p>Sign in</p></button>
              <Link to='/signup'>
                <p className="login__form__small-paragraph">Create account</p>
              </Link>
           </form>
          </div>

          <div className="login__splash col col-md-6 col-xs-12">
          </div>
        </div>
     </div>
    )
  }
}

export default Login;
