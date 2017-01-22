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

  componentDidMount() {
    console.log('component will mount');
    SitesStore.on('change', () => {
      console.log('store changed');
      this.setState({
        sites: SitesStore.getAll()
      })
      console.log(this.state.sites);
    });
  }

  render() {
    const sites = this.state.sites.map((website, i) => (
      <SiteTile
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
