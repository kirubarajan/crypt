import React from 'react';
import { browserHistory } from 'react-router';

class SiteTile extends React.Component {
  render() {
    return (
      <div className="site-list__tile col col-sm-6" onClick={this.props.onTileClick.bind(this, this.props._id)}>
        <h1> {this.props.name} </h1>
      </div>
    );
  }
}

export default SiteTile;
