import React from 'react';

import SiteCreator from '../components/SiteCreator';
import SiteList from '../components/SiteList'

class CoreContainer extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col col-sm-6">
            <SiteCreator />
          </div>

          <div className="col col-sm-6">
            <SiteList />
          </div>
        </div>
      </div>
    );
  }
}

export default CoreContainer;
