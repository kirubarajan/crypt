import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router';

class Home extends React.Component {
  render() {
    return (
      <div className="container one-edge-shadow">
        <div className="row align-items-sm-center justify-content-sm-center">
          <div className="col-left col col-sm-6">
            <h1>SIGN IN</h1>
            <Form>
             <FormGroup>
               <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
             </FormGroup>
             <FormGroup>
               <Input type="password" name="password" id="examplePassword" placeholder="Password" />
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
