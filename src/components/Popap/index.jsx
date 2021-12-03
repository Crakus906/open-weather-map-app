/* eslint-disable react/prop-types */
import React from 'react';
import cn from 'classnames/bind';

import styles from './style.module.scss';

const cx = cn.bind(styles);

export default function Popap({ item }) {
  const data = [
    {
      label: 'Feels Like',
      value: Math.round(item.feels_like),
    },
    {
      label: 'Wind',
      value: `${Math.round(item.wind_gust)} km/h`,
    },
    {
      label: 'Humidity',
      value: `${item.humidity} %`,
    },
    {
      label: 'UV Index',
      value: `${Math.round(item.uvi)} of ${item.visibility}`,
    },
  ];

  return (
    <div className={cx('popap')}>
      {data.map((e) => (
        <div className={cx('popap-block')}>
          <span className={cx('label')}>{e.label}</span>
          <span className={cx('value')}>{e.value}</span>
        </div>
      ))}

    </div>
  );
}
