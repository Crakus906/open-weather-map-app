import React from 'react';
import cn from 'classnames/bind';
import styles from './style.module.scss';

const cx = cn.bind(styles);

export default function TempDay({title, description, weather, feels_like }) {

  console.log(title === 'Morning', weather);
  return (
    <div className={cx('container-day', {'active': title === 'Morning'})}>
      <div>{title}</div>
        <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt={weather.description} />
        <div className={cx('main')}>{weather.main}</div>
        <div className={cx('temp')}>{description}</div>
        <div className={cx('temp')}>{feels_like}</div>
    </div>
  )
}
