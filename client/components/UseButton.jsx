import React from 'react';
import { browserHistory } from 'react-router';

import Uber from './buttons/Uber';
import Delivery from './buttons/Delivery';
import Jet from './buttons/Jet';
import Resy from './buttons/Resy';

class UseButton extends React.Component {

  render() {

    if (this.props.profile == "AMC") {

      console.log("uber");
      return (<Uber />);

    }

    else if (this.props.profile == "Chase") {

      console.log("jet");
      return (<Jet />);

    }

    else if (this.props.profile == "Netflix") {

      console.log("delivery");
      return (<Delivery />);

    }

    else if (this.props.profile == "Penn") {

      console.log("resy");
      return (<Resy />);

    }

    else {

      console.log("nothing");
      return (<div> </div>);

    }

  }

}

export default UseButton;
