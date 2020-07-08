import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { OpportunityPanel }from '../pages';

import '../styles/global';

const Routes: React.FC = () => {

  return (
    <Switch>
      <Route path="/" exact component={OpportunityPanel}/>
    </Switch>
  )
}

export default Routes;