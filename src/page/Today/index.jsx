import React from 'react';
import cn from 'classnames/bind';
import Weather from '../Weather';
import CurrentWeather from '../../moduls/CurrentWeather';
import CardToday from '../../moduls/CardToday';

import styles from './style.module.scss';

const cx = cn.bind(styles);

export default function Today() {
 
  return (
    <Weather >
      <div className={cx('home')}>
        <CurrentWeather />
        <CardToday />
      </div>
    </Weather>
  )
}
