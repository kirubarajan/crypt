import React from 'react';
import { Link, browserHistory } from 'react-router';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { createContainer } from 'meteor/react-meteor-data';
import { Profiles } from '../../imports/collections/profiles';

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

  handleDeleteClick(event) {
    event.preventDefault();
    const id = this.state.site._id;
    Meteor.call('profiles.remove', id, function(error) {
      if (error) {
        console.log(error.reason);
      } else {
        console.log('deleting', id);
        console.log(this.props);
      }
    });

    // update store with new sites collection that has deleted site
    SitesStore.createSite(sites);
    browserHistory.push('/accounts');
  }

  render() {
    return (
      <div className="site-config">
        <h1>Edit Website Information</h1>
        <Form>
          <FormGroup>
            <input
              autoFocus
              type="text"
              placeholder="Enter a new website name"
              defaultValue={this.state.site.name}/>
            <input
              type="text"
              placeholder="Enter a new email"
              defaultValue={this.state.site.email}/>
            <input
              type="text"
              placeholder="Enter a new password"
              defaultValue={this.state.site.password}/>
          </FormGroup>
          <Link to='/accounts'><Button>Back</Button></Link>
          <Button className="delete-button" onClick={this.handleDeleteClick.bind(this)}>Delete</Button>
        </Form>
      </div>
    );
  }
}

export default createContainer(() => {

  Meteor.subscribe('profiles');

  return { profiles: Profiles.find({owner: Meteor.userId()}).fetch() }

}, SiteConfig);
