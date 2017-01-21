import React from 'react';

import SiteTile from '../components/SiteTile';

class SiteList extends React.Component {
  constructor() {
    super();
    // get data from meteor call
    this.state = {
      sites: [
        {name: 'google', url: 'google.com'},
        {name: 'facebook', url: 'facebook.com'},
        {name: 'twitter', url: 'twitter.com'},
        {name: 'instagram', url: 'instagram.com'},
        {name: 'linkedin', url: 'linkedin.com'}
      ],
      test: 'test'
    };
  }

  render() {
    const sites = this.state.sites.map((website) => (
      <SiteTile
        name={website.name}
        url={website.url}
        onDelete={this.props.onDelete}/>
    ));
    return (
    <div className="row">
      {sites}
    </div>
    );
  }
}

export default SiteList;
