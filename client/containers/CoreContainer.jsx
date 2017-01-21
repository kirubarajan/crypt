import React from 'react';

import SiteCreator from '../components/SiteCreator';
import SiteList from '../components/SiteList'

class CoreContainer extends React.Component {
  // add website to meteor collection
  handleCreate(website, url) {
    console.log('works');
    console.log(website, url);
    // send backend this info
      const object = Meteor.call('profiles.insert', website, url);
      console.log(object);
    // update state
      // this.setState({
      //   sites = Accounts.find({owner: Meteor.userId()}).fetch();
      // });
  }

  handleDelete(event, siteID) {
    event.preventDefault();
    // delete site with meteor method
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col col-sm-6 site-creator-wrapper">
            <SiteCreator
              onCreate={this.handleCreate.bind(this)}/>
          </div>

          <div className="col col-sm-6">
            <SiteList onDelete={this.handleDelete}/>
            {/* sites={this.state.sites} */}
          </div>
        </div>
      </div>
    );
  }
}

export default CoreContainer;
