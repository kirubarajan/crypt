import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Signup extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row align-items-sm-center justify-content-sm-center">
          <div className="col col-sm-6 offset-sm-3">
            <h1 className="header-signup">SIGN UP</h1>
            <Form>
              <FormGroup>
                <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
              </FormGroup>
              <FormGroup>
                <Input type="password" name="password" id="examplePassword" placeholder="Password" />
              </FormGroup>
              <FormGroup>
                <Input type="password" name="password" id="examplePassword" placeholder="Repeat Password" />
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
