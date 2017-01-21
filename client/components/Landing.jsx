import React from 'react';
import { Link } from 'react-router';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Landing extends React.Component {
  render() {
    return (
    <div>
      <div className="landing col col-sm-12">
        <h1 className="landing-header"> CRYPT </h1>
        <p className="landing-paragraph"> easily  <span className="create">create</span> & <span className="manage">manage</span> secure emails & passwords.</p>
        <img className="landing-img center-block" src="images/main-logo.png" />
        <Link to='/home'>
          <Button className="hvr-shutter-out-horizontal">BEGIN</Button>
        </Link>
      </div>

      <div className="landing-info col col-sm-12">
        <img className="landing-info-img center-block" src="images/lower-logo.png" />
        <p className="landing-paragraph landing-info-paragraph"> Crypt is a powerful password manager that adds another layer of security by generating different passwords AND email addresses for accounts. </p>
        <p className="landing-paragraph landing-info-paragraph"> Generating random and secure emails prevents all your online accounts being grouped together for hackers to target. </p>
        <p className="landing-paragraph landing-info-paragraph"> And because we care about security, all account information on Crypt is encrypted using AES256 to ensure that all your data is 100% secure. </p>
      </div>

      <div className="landing-footer col col-sm-12">
        <p className="landing-paragraph landing-footer-paragraph"> made by arun, brian, jeff and jevin </p>
      </div>

    </div>

    );
  }
}

export default Landing;
