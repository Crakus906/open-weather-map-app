/* eslint-disable default-param-last */
/* eslint-disable react/prop-types */
import React from 'react';
import cn from 'classnames/bind';
import moment from 'moment';
import styles from './style.module.scss';
import Day from './Day';
import TempDay from './TempDay';

const cx = cn.bind(styles);

const dataValue = ['clouds', 'dew_point', 'humidity', 'moon_phase', 'pop', 'pressure', 'snow', 'rain', 'uvi', 'wind_gust'];
const dataTIme = ['moonrise', 'moonset', 'sunrise', 'sunset'];

const dataDay = [
  { label: 'Morning', key: 'morn' },
  { label: 'Day', key: 'day' },
  { label: 'Evening', key: 'eve' },
  { label: 'Night', key: 'night' },
];

export default function DetailsDay({ currentDay }) {
  const getDescription = (obj = {}, key) => {
    if (obj[key] === undefined || NaN) return '-';
    return Math.round(obj[key]);
  };

  return (
    <div className={cx('details-day')}>
      <div className={cx('title')}>{moment.unix(currentDay.dt).format('dddd MMMM Do YYYY')}</div>
      <div className={cx('content')}>
        <div className={cx('detail-weather')}>
          {dataValue.map((key) => (
            <Day
              title={key.split('_').join(' ')}
              description={getDescription(currentDay, key)}
            />
          ))}
        </div>
        <div className={cx('detail-temp')}>
          <div className={cx('explanation')}>
            <div>Temperature:</div>
            <div>Feels like:</div>
          </div>
          {dataDay.map((item) => (
            <TempDay
              title={item.label}
              description={getDescription(currentDay.temp, item.key)}
              feelsLike={getDescription(currentDay.feels_like, item.key)}
              weather={currentDay.weather[0]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
