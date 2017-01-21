import React from 'react';

import SitesStore from '../stores/SitesStore';
import SiteTile from '../components/SiteTile';

class SiteList extends React.Component {
  constructor() {
    super();
    this.state = {
      sites: SitesStore.getAll()
    };
  }

  componentWillMount() {
    SitesStore.on('change', () => {
      this.setState({
        sites: SitesStore.getAll()
      })
    });
  }

  render() {

    //works
    // this.state.sites.map((website) => {
    //   console.log(website._id);
    // });

    const sites = this.state.sites.map((website, i) => (
      <SiteTile
        // doesnt assign key
        _id={website._id}
        key={i}
        name={website.name}
        url={website.url}
        onDelete={this.props.onDelete}
        onTileClick={this.props.onTileClick}/>
    ));
    return (
    <div className="row site-list">
      {sites}
      {this.props.sites}
    </div>
    );
  }
}

export default SiteList;
