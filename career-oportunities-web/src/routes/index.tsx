import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { OpportunityPanel, DetailOpportunity }from '../pages';

import '../styles/global';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={OpportunityPanel}/>
    <Route path="/details/:id" component={DetailOpportunity}/>
  </Switch>
)
export default Routes;