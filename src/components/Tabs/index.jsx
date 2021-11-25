import React from 'react';
import cn from 'classnames/bind';
import { useHistory } from "react-router-dom";

import styles from './style.module.scss';
// import { useDispatch, useSelector } from 'react-redux';
// import { oneCallWeather, weatherCity } from '../../redux/action/weather';
// import { currentWeatherSelector } from '../../redux/selector/selector';

const cx = cn.bind(styles);

export default function Tabs() {
  // const dispatch = useDispatch()
  const history = useHistory();
  
  // useEffect(() => {
  //   if(currentWeather) {
  //     const { coord } = currentWeather ;
  //     dispatch(oneCallWeather(coord.lat, coord.lon))
  //   }
  // },[dispatch])

  // const currentWeather = useSelector(currentWeatherSelector);

  // const handleClickHourly = () => {
  //   history.push('/hourly');
  //   const { coord } = currentWeather;
  //   dispatch(oneCallWeather(coord.lat, coord.lon));
  // }

  return (
    <div className={cx('tabs')}>
      <div onClick={() => history.push('/today')}>Today</div>
      <div onClick={() => history.push('/hourly')}>Hourly</div>
    </div>
  )
}
