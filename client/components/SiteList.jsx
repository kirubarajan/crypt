import React from 'react';

import SitesStore from '../stores/SitesStore';
import SiteTile from '../components/SiteTile';

import { createContainer } from 'meteor/react-meteor-data';
import { Profiles } from '../../imports/collections/profiles';

class SiteList extends React.Component {

  constructor() {
    super();
  }

  componentDidMount() {
    console.log('component will mount');
  }

  render() {
    const sites = this.props.profiles.map((website, i) => (
      <SiteTile
        _id={website._id}
        key={i}
        name={website.name}
        onDelete={this.props.onDelete}
        onTileClick={this.props.onTileClick}/>
    ));
    return (
    <div className="row">
      {sites}
      {this.props.sites}
    </div>
    );
  }
}


export default createContainer(() => {

  Meteor.subscribe('profiles');

  return { profiles: Profiles.find({owner: Meteor.userId()}).fetch()}

}, SiteList);
