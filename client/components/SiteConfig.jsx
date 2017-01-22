import React from 'react';
import { Link, browserHistory } from 'react-router';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { createContainer } from 'meteor/react-meteor-data';
import { Profiles } from '../../imports/collections/profiles';

import copy from 'copy-to-clipboard';
import { Notification } from 'react-notification';

import UseButton from './UseButton';

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
    }

    handleCopyPasswordClick(event) {
      event.preventDefault();
      copy(this.state.site.password);
      this.setState({ notification: true });
    }

    handleUpdateClick(event) {
      event.preventDefault();
      console.log(this.state.site._id);
      const id = this.state.site._id;
      const name = this.refs.name.value;
      const email = this.refs.email.value;
      const password = this.refs.password.value;

      const newSite = {
        name,
        email,
        password,
        id
      }

      Meteor.call("edit", newSite, function(error) {
        if (error) {
          console.log(error.reason);
        } else {
          console.log('updating', this.state.site._id);
        }
      });

      browserHistory.push('/accounts');

    }

    render() {
      return (
        <div className="site-config">
          <h1> {this.state.site.name} Account </h1>
          <Form>
            <FormGroup className="site-config-form">
              <p>Website Name</p>
              <input
                className="hvr-underline-from-left"
                type="text"
                placeholder="Enter a new website name"
                defaultValue={this.state.site.name}
                ref="name"/>
              <p>Email</p>
              <div className="input--copy-functionality">
                <input
                  type="text"
                  placeholder="Enter a new email"
                  defaultValue={this.state.site.email}
                  ref="email"/>
                  <Button className="button-right" onClick={this.handleCopyEmailClick.bind(this)}>Copy Email</Button>
              </div>
              <br />
              <p>Password</p>
              <div className="input--copy-functionality">
                <input
                  type="text"
                  placeholder="Enter a new password"
                  defaultValue={this.state.site.password}
                  ref="password"/>
                  <Button className="button-right" onClick={this.handleCopyPasswordClick.bind(this)}>Copy Password</Button> <br />
              </div>
            </FormGroup>
            <Notification
               isActive={this.state.notification}
               message={"Copied to clipboard!"}
               activeClassName={".notification"}
               onDismiss={this.hideNotification.bind(this)}
             />
            <Button className="delete-button button-right" onClick={this.handleDeleteClick.bind(this)}>Delete</Button>
            <Button className="update-button button-left" onClick={this.handleUpdateClick.bind(this)}>Update</Button>
            <Link to='/accounts'><Button className="back-button">Back</Button></Link>
          </Form>

          <UseButton profile={this.state.site.name} />

        </div>
      );
    }
  }

export default createContainer(() => {

  Meteor.subscribe('profiles');

  return { profiles: Profiles.find({owner: Meteor.userId()}).fetch() }

}, SiteConfig);
