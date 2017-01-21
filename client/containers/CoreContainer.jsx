import React from 'react';

import SiteCreator from '../components/SiteCreator';
import SiteList from '../components/SiteList'

class CoreContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      sites: []
    };
  }

  // update state - specifically array of cards
  handleCreate(website, url) {
    console.log('works');
    console.log(website, url);
    //send backend this info
      const object = Meteor.call('accounts.insert', website, url);
      console.log(object);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col col-sm-6">
            <SiteCreator
              onCreate={this.handleCreate.bind(this)}/>
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
