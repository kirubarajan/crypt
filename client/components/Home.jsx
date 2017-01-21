import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1> Home </h1>
        <Form>
         <FormGroup>
           <Label for="exampleEmail">Email</Label>
           <Input type="email" name="email" id="exampleEmail" placeholder="email" />
         </FormGroup>
         <FormGroup>
           <Label for="examplePassword">Password</Label>
           <Input type="password" name="password" id="examplePassword" placeholder="password" />
         </FormGroup>
         <Button>Submit</Button>
       </Form>
     </div>
    )
  }
}

export default Home;
