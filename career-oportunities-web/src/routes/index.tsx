import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { OpportunityPanel, DetailOpportunity }from '../pages';

import '../styles/global';

const Routes: React.FC = () => {

  return (
    <Switch>
      <Route path="/" exact component={OpportunityPanel}/>
      <Route path="/details" component={DetailOpportunity}/>
    </Switch>
  )
}

export default Routes;