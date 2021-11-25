import React,{ useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames/bind';
import { CardHourly } from '../../moduls';
import { currentWeatherSelector } from '../../redux/selector/selector';
import { oneCallWeather } from '../../redux/action/weather';
import Weather from '../Weather';

import styles from './style.module.scss';

const cx = cn.bind(styles);

export default function Hourly() {
  const dispatch = useDispatch();
  
  const currentWeather = useSelector(currentWeatherSelector);
  
  useEffect(() => {
    if(currentWeather) {
      const { coord } = currentWeather ;
      dispatch(oneCallWeather(coord.lat, coord.lon))
    }
  },[dispatch])

  return (
    <Weather >
      <CardHourly />
    </Weather>
  )
}
