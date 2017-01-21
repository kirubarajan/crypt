import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Containers we're loading
import CoreContainer from './containers/CoreContainer';

// Components we're loading
import Main from './components/Main';
import Home from './components/Home';
import Signup from './components/Signup';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='signup' component={Signup} />
      <Route path='core' component={CoreContainer} />
    </Route>
  </Router>
)

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
});
