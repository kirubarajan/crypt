import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
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

  handleCreate(website, url) {
    // inserting the created website into meteor collection
    const object = Meteor.call('profiles.insert', website, url, function(error) {
      if (error) {
        console.log(error.reason);
      } else {
        console.log('adding a website...', website, url);
      }
    });

    const sites = this.props.profiles;
    console.log(sites);

    // update store with email and pass, and unique id
      siteStore.createSite(sites);
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
      <div>
        <div>
          <input className="copy-input" value={this.state.value}
            onChange={({target: {value}}) => this.setState({value, copied: false})} />&nbsp;

          <CopyToClipboard text={this.state.value}
            onCopy={() => this.setState({copied: true})}>
            <button className="copy-button">Copy to clipboard</button>
          </CopyToClipboard>&nbsp;

          {this.state.copied ? <span>Copied</span> : null}
        </div>

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
      </div>
    );
  }
}

export default createContainer(() => {

  Meteor.subscribe('profiles');

  return { profiles: Profiles.find({owner: Meteor.userId()}).fetch() }

}, CoreContainer);
