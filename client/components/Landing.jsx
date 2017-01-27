import React from 'react';
import { Link, browserHistory } from 'react-router';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Landing extends React.Component {
  handleButtonClick(event) {
    event.preventDefault();
    console.log('fired');
    browserHistory.push('/login')
  }

  render() {
    return (
    <div>
      <div className="landing__splash col col-xs-12">
        <h1>Crypt</h1>
        <p>easily  <span>create</span> & <span>manage</span></p>
        <p>secure emails & passwords.</p>
        <img src="images/main-logo.png" />
        <button onClick={this.handleButtonClick}><p>Begin</p></button>
      </div>

      <div className="landing__info col col-xs-12">
        <img src="images/lower-logo.png" />
        <p> Crypt generates email addresses & passwords for  your online accounts.
          <br/><br/>
          Using these credentials means that when a platform you use is <a href="https://www.nytimes.com/2016/12/14/technology/yahoo-hack.html" target="_blank"> hacked </a> -- and user information is exposed -- your personal email won't be compromised and the password is disposable.
          <br/><br/>
          Account information on Crypt is encrypted using <a href="http://csrc.nist.gov/publications/fips/fips197/fips-197.pdf" target="_blank">AES256</a> (hacker mans ain't  shit).
        </p>
      </div>

      <div className="landing__footer col col-xs-12">
        <p className="landing-paragraph landing-footer-paragraph">made by <a href="https://github.com/a19n" target="_blank">arun</a>, brian, <a href="https://github.com/jeffzhangg" target="_blank">jeff</a> and <a href="https://github.com/JevinSidhu" target="_blank">jevin</a></p>
      </div>

    </div>

    );
  }
}

export default Landing;
