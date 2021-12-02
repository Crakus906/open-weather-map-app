import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { weatherCity } from '../redux/action/weather';

const Weather = lazy(() => import('../page/Weather/index'));
const ToDay = lazy(() => import('../page/Today/index'));
const Hourly = lazy(() => import('../page/Hourly/index'));
const EightDays = lazy(() => import('../page/EightDays/index'));
const FiveDays = lazy(() => import('../page/FiveDays/index'));

const Routes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storage = sessionStorage.getItem('city');
    dispatch(weatherCity(storage));
  }, []);

  return (
    <Suspense fallback={<div>Loading...)=</div>}>
      <Switch>
        <Route exact path="/" component={Weather} />
        <Route path="/today" component={ToDay} />
        <Route path="/hourly" component={Hourly} />
        <Route path="/forecast-eight-day/:id?" component={EightDays} />
        {/* <Route path="/forecast-five-day/:id?" component={FiveDays} />       */}
      </Switch>
    </Suspense>
  );
};

export default Routes;
