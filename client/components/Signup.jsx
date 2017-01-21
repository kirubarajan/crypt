import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Signup extends React.Component {
  render() {
    return (
      <div>
        <h1>Signup</h1>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="email" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Repeat Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="repeat password" />
          </FormGroup>
          <Button>Enter</Button>
        </Form>
      </div>
    );
  }
}

export default Signup;
