import React from 'react';
import { Link, browserHistory } from 'react-router';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { createContainer } from 'meteor/react-meteor-data';
import { Profiles } from '../../imports/collections/profiles';

import copy from 'copy-to-clipboard';
import { Notification } from 'react-notification';

class SiteConfig extends React.Component {

    constructor(props) {

      super(props);

      this.state = {
        site: '',
        notification: false
      };

    }

    componentWillMount() {

      console.log(this.props.profiles.find(x => x._id === this.props.params.profile));

      this.setState({
        site: this.props.profiles.find(x => x._id === this.props.params.profile)
      });
    }

    hideNotification() {

      this.setState({ notification: false });

    }

    handleDeleteClick(event) {
      event.preventDefault();
      const id = this.state.site._id;
      Meteor.call('profiles.remove', id, function(error) {
        if (error) {
          console.log(error.reason);
        } else {
          console.log('deleting', id);
          browserHistory.push('/accounts');
        }
      });
    }

    handleCopyEmailClick(event) {
      event.preventDefault();
      copy(this.state.site.email);
      this.setState({ notification: true });
    };

    handleCopyPasswordClick(event) {
      event.preventDefault();
      copy(this.state.site.password);
      this.setState({ notification: true });
    };

    render() {
      return (
        <div className="site-config">
          <h1> {this.state.site.name} Account </h1>
          <Form>
            <FormGroup className="site-config-form">
              <p>Website Name</p>
              <input
                autoFocus
                type="text"
                placeholder="Enter a new website name"
                defaultValue={this.state.site.name}/>
              <p>Email</p>
              <input
                type="text"
                placeholder="Enter a new email"
                defaultValue={this.state.site.email}/>
              <p>Password</p>
              <input
                type="text"
                placeholder="Enter a new password"
                defaultValue={this.state.site.password}/>
            </FormGroup>
            <Notification
               isActive={this.state.notification}
               message={"Copied to clipboard!"}
               activeClassName={".notification"}
               onDismiss={this.hideNotification.bind(this)}
             />
            <Button className="copy button-left" onClick={this.handleCopyEmailClick.bind(this)}>Copy Email</Button>
            <Button className="copy button-right" onClick={this.handleCopyPasswordClick.bind(this)}>Copy Password</Button> <br />
            <Link to='/accounts'><Button className=" button-left">Back</Button></Link>
            <Button className="delete-button button-right" onClick={this.handleDeleteClick.bind(this)}>Delete</Button>
          </Form>

          <div data-bttnio-id="btn-4307f29c2502fce0" data-bttnio-context='{ "user_location": { "latitude": 40.6827, "longitude": -73.9754 }, "subject_location": { "latitude": 40.7382869, "longitude": -73.9823721 } }'></div>

        </div>
      );
    }
  }

export default createContainer(() => {

  Meteor.subscribe('profiles');

  return { profiles: Profiles.find({owner: Meteor.userId()}).fetch() }

}, SiteConfig);
