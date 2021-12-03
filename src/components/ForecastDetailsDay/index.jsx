/* eslint-disable default-param-last */
/* eslint-disable react/prop-types */
import React from 'react';
import cn from 'classnames/bind';
import moment from 'moment';
import styles from './style.module.scss';
import Day from './Day';
import TempDay from './TempDay';

const cx = cn.bind(styles);

export default function ForecastDetailsDay({ filterListName }) {
  console.log(filterListName[0].main);

  const getDescription = (obj = {}, key) => {
    if (obj[key] === undefined) return '-';
    return Math.round(obj[key]);
  };

  return (
    <div className={cx('details-day')}>
      <div className={cx('container-values')}>
        {Object.keys(filterListName[0].main).map((key) => (
          <div className={cx('value')}>
            {key.split('_').join(' ') }
          </div>
        ))}
      </div>

      {filterListName.map((item) => (
        <Day item={item} />
      ))}
    </div>
  );
}
