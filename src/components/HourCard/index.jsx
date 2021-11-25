import React from 'react';
import cn from 'classnames/bind';
import moment from 'moment';

import styles from './style.module.scss';

const cx = cn.bind(styles);

export default function HourCard({ hourly, day }) {
  console.log(hourly);

  return (
    <div className={cx('cardItem')}>
      <span>{day}</span>
      {hourly.map(item => (
        day === moment.unix(item.dt).format('dddd MMMM, Do') ?
        <div className={cx('row')}>
          {moment.unix(item.dt).format('h:mm:a ')}
          <span>{item.temp}°</span>
          <div>
            <img src={`http://openweathermap.org/img/wn/${item.weather[0]?.icon}@2x.png`} alt={item.weather[0]?.description} />
            <span>{item.weather[0].main}</span>
          </div>
        </div> : null
      ))}
    </div>
  )
}
