import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class SiteCreator extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   websiteValue: '',
    //   urlValue: ''
    // };
  }

  // handleWebsiteChange(e) {
  //   this.setState({
  //     websiteValue: e.target.value
  //   })
  // }
  //
  // handleUrlChange(e) {
  //   this.setState({
  //     urlValue: e.target.value
  //   })
  // }

  onCreate(event) {
    event.preventDefault();
    const website = this.refs.website.value;
    const url = this.refs.url.value;
    this.props.onCreate(website, url);
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.onCreate.bind(this)}>
          <FormGroup>
            <Label>Website Name</Label>
            <input
              type="text"
              placeholder="What's the name of the website?"
              ref="website" />
          </FormGroup>
          <FormGroup>
            <Label>URL</Label>
            <input
              type="text"
              placeholder="What is the URL of the website?"
              ref="url" />
          </FormGroup>
          <Button>Create</Button>
        </Form>

      </div>
    );
  }
}

export default SiteCreator;
