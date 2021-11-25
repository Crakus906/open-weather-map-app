import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const Weather = lazy(() => import('../page/Weather/index'));
const ToDay = lazy(() => import('../page/Today/index'));
const Hourly = lazy(() => import('../page/Hourly/index'));

const Routes = () => (
  <Suspense fallback={<div>Loading...)=</div>}>
    <Switch>
      <Route exact path="/" component={Weather} />
      <Route path="/today" component={ToDay} />   
      <Route path="/hourly" component={Hourly} />      
    </Switch>
  </Suspense>
);

export default Routes;
