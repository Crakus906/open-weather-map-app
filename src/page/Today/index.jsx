import React from 'react';
import cn from 'classnames/bind';
import Weather from '../Weather';
import { CurrentWeather, CardToday, ForecastHourly } from '../../moduls';

import styles from './style.module.scss';

const cx = cn.bind(styles);

export default function Today() {

  return (
    <Weather >
      <div className={cx('home')}>
        <CurrentWeather />
        <CardToday />
        <ForecastHourly />
      </div>
    </Weather>
  )
}
