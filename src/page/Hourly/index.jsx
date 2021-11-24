import React from 'react';
import cn from 'classnames/bind';
import { useSelector } from 'react-redux';
import { currentWeatherSelector } from '../../redux/selector/selector';
import CurrentWeather from '../../moduls/CurrentWeather';
import Header from '../../components/Header';

import styles from './style.module.scss';
import Weather from '../Weather';

const cx = cn.bind(styles);

export default function Hourly() {
  const currentWeather = useSelector(currentWeatherSelector)
 
  return (
    <Weather >
      hui
    </Weather>
  )
}
