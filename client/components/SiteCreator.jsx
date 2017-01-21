import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class SiteCreator extends React.Component {
  onCreate(event) {
    event.preventDefault();
    const website = this.refs.website.value;
    const url = this.refs.url.value;
    this.props.onCreate(website, url);
  }

  render() {
    return (
      <div className="site-creator">
        <h1>Add Website</h1>
        <Form onSubmit={this.onCreate.bind(this)}>
          <FormGroup>
            <input
              type="text"
              placeholder="What's the name of the website?"
              ref="website" />
          </FormGroup>
          <FormGroup>
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
