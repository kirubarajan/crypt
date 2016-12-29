import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Splash from './components/splash';

const screen = (

  <Router history={browserHistory}>

    <Route path='/' component={Splash}/>

  </Router>

);

Meteor.startup(() => {
  ReactDOM.render(screen, document.querySelector('.render-target'));
});
