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
        <img className="landing-img center-block" src="http://i.imgur.com/X24R62E.png" />
        <Link to='/home'>
          <Button className="hvr-shutter-out-horizontal">BEGIN</Button>
        </Link>
      </div>

      <div className="landing-info col col-sm-12">
        <img className="landing-info-img center-block" src="http://i.imgur.com/Z07jJLu.png" />
        <p className="landing-paragraph landing-info-paragraph"> crypt is a password manager that prevents rainbow look up hacking attempts by abstracting away email from account creation.  </p>

      </div>

      <div className="landing-footer col col-sm-12">
        <p className="landing-paragraph landing-footer-paragraph"> made by arun, brian, jeff and jevin </p>
      </div>

    </div>

    );
  }
}

export default Landing;
