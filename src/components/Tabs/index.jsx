/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import cn from 'classnames/bind';
import { useLocation, useHistory, useParams } from 'react-router-dom';

import styles from './style.module.scss';

const cx = cn.bind(styles);

export default function Tabs() {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();

  const handleToday = () => {
    history.push('/today');
  };

  const handleHourly = () => {
    history.push('/hourly');
  };

  const handleForecastEightDay = () => {
    history.push(`/forecast-eight-day/${+params.id || 0}`);
  };

  const handleActive = (e) => {
    if (location.pathname === e) return true;
  };

  return (
    <div className={cx('tabs')}>
      <div
        className={cx('tab', { active: handleActive('/today') })}
        onClick={handleToday}
        role="button"
      >
        Today
      </div>
      <div
        className={cx('tab', { active: handleActive('/hourly') })}
        onClick={handleHourly}
        role="button"
      >
        Hourly
      </div>
      <div
        className={cx('tab', { active: handleActive(`/forecast-eight-day/${+params.id || 0}`) })}
        onClick={handleForecastEightDay}
        role="button"
      >
        8 days
      </div>
      {/* <div
        className={cx('tab', { active: handleActive(`/forecast-eight-day/${+params.id || 0}`) })}
        onClick={handleForecastEightDay}
      >
        5 days
      </div> */}
    </div>
  );
}
