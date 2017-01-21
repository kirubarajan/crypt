import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Containers we're loading
import CoreContainer from './containers/CoreContainer';

// Components we're loading
import Main from './components/Main';
import Home from './components/Home';
import Signup from './components/Signup';
import Landing from './components/Landing';
import SiteConfig from './components/SiteConfig';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Landing} />
      <Route path='home' component={Home} />
      <Route path='signup' component={Signup} />
      <Route path='accounts' component={CoreContainer} />
      <Route path='config' component={SiteConfig} />
    </Route>
  </Router>
)

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
});
