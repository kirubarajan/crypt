import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

import SiteCreator from '../components/SiteCreator';
import SiteList from '../components/SiteList'

class CoreContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      copied: false
    };
  }

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
              <SiteList onDelete={this.handleDelete}/>
              {/* sites={this.state.sites} */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CoreContainer;
