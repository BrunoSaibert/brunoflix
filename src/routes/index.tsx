import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Series from '../pages/Series';
import Movies from '../pages/Movies';
import Latest from '../pages/Latest';
import MyList from '../pages/MyList';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/series" component={Series} />
    <Route path="/movies" component={Movies} />
    <Route path="/latest" component={Latest} />
    <Route path="/my-list" component={MyList} />
  </Switch>
);

export default Routes;
