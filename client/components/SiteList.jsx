import React from 'react';

import SiteTile from '../components/SiteTile';

class SiteList extends React.Component {
  constructor() {
    super();
    // get data from meteor call
    this.state = {
      sites: [
        'google',
        'facebook',
        'github'
      ],
      test: 'test'
    };
  }

  render() {
    const sites = this.state.sites.map((website) => (<SiteTile name={website} />));
    return (
    <div>
      {sites}
    </div>
    );
  }
}

export default SiteList;
