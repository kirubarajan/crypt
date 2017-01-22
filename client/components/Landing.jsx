import React from 'react';
import { Link } from 'react-router';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Landing extends React.Component {
  render() {
    return (
    <div>
      <div className="landing col col-xs-12">
        <h1 className="landing-header"> CRYPT </h1>
        <p className="landing-paragraph"> easily  <span className="create">create</span> & <span className="manage">manage</span> secure emails & passwords.</p>
        <img className="landing-img center-block" src="images/main-logo.png" />
        <Link to='/home'>
          <Button className="landing-button">BEGIN</Button>
        </Link>
      </div>

      <div className="landing-info col col-xs-12">
        <img className="landing-info-img center-block" src="images/lower-logo.png" />
        <p className="landing-paragraph landing-info-paragraph"> Crypt generates email addresses & passwords for  your online accounts.
          <br/><br/>
          Using these credentials means that when a platform you use is <a className="hack" href="https://www.nytimes.com/2016/12/14/technology/yahoo-hack.html" target="_blank"> hacked </a> -- and user information is exposed -- your personal email won't be compromised and the password is disposable.
          <br/><br/>
          Account information on Crypt is encrypted using <a href="http://csrc.nist.gov/publications/fips/fips197/fips-197.pdf" target="_blank"> <span className="highlight">AES256</span></a> (hacker mans ain't  shit).</p>
      </div>

      <div className="landing-footer col col-xs-12">
        <p className="landing-paragraph landing-footer-paragraph"> made by arun, brian, jeff and jevin </p>
      </div>

    </div>

    );
  }
}

export default Landing;
