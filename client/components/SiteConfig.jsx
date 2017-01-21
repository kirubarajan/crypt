import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import SitesStore from '../stores/SitesStore';

class SiteConfig extends React.Component {
  constructor() {
    super();
    this.state = {
      site: ''
    };
  }

  componentWillMount() {
    this.setState({
      site: SitesStore.findCurrent()
    });
  }

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Input
              type="text"
              placeholder="Enter a new website name"
              defaultValue={this.state.site.name}/>
            <Input
              type="text"
              placeholder="Enter a new URL"
              defaultValue={this.state.site.url}/>
            <Input
              type="text"
              placeholder="Enter a new email"
              defaultValue={this.state.site.email}/>
            <Input
              type="text"
              placeholder="Enter a new password"
              defaultValue={this.state.site.password}/>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default SiteConfig;
