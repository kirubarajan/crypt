import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router';

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row align-items-sm-center justify-content-sm-center">
          <div className="col col-sm-12">
            <h1>Home</h1>
            <Form>
             <FormGroup>
               <Label for="exampleEmail">Email</Label>
               <Input type="email" name="email" id="exampleEmail" placeholder="email" />
             </FormGroup>
             <FormGroup>
               <Label for="examplePassword">Password</Label>
               <Input type="password" name="password" id="examplePassword" placeholder="password" />
             </FormGroup>
             <Button>Enter</Button>
             <Link to='/signup'>
               <Button>Signup</Button>
             </Link>
           </Form>
          </div>
        </div>
     </div>
    )
  }
}

export default Home;
