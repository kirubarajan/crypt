import React from 'react';
import { browserHistory } from 'react-router';

import { createContainer } from 'meteor/react-meteor-data';
import { Profiles } from '../../imports/collections/profiles';

import SiteCreator from '../components/SiteCreator';
import SiteList from '../components/SiteList'

import SitesStore from '../stores/SitesStore';

class CoreContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      copied: false,
    };
  }

  handleCreate(website) {
    // inserting the created website into meteor collection
    var context = this;
    const object = Meteor.call('profiles.insert', website, function(error) {
      if (error) {
        console.log(error.reason);
      } else {
        console.log('adding a website...', website);
        const sites = context.props.profiles;
        console.log(sites);

        // update store with email and pass, and unique id
          siteStore.createSite(sites);
      }
    });
  }

  handleDelete(event, siteID) {
    event.preventDefault();
    // delete site with meteor method
  }

  handleTileClick(id) {
    // emit/create to store
    siteStore.createCurrentSite(id);

    // launch screen with tile info
    browserHistory.push('/config');
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col col-sm-7 site-creator-container">
            <SiteCreator
              onCreate={this.handleCreate.bind(this)}/>
          </div>

          <div className="col col-sm-5">
            <SiteList
              sites={this.state.sites}
              onDelete={this.handleDelete}
              onTileClick={this.handleTileClick}/>
            {/* sites={this.state.sites} */}
          </div>
        </div>
      </div>
    );
  }
}

export default createContainer(() => {

  Meteor.subscribe('profiles');

  return { profiles: Profiles.find({owner: Meteor.userId()}).fetch() }

}, CoreContainer);
