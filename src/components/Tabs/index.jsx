import React from 'react';
import cn from 'classnames/bind';
import { useLocation, useHistory, useParams } from 'react-router-dom'
import moment from 'moment';

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
    if(location.pathname === e) return true
  }
 
  return (
    <div className={cx('tabs')}>
      <div 
        className={cx('tab',{ 'active': handleActive('/today')})} 
        onClick={handleToday}
      >
        Today
      </div>
      <div 
        className={cx('tab',{ 'active': handleActive('/hourly')})} 
        onClick={handleHourly}
      >
        Hourly
      </div>
      <div 
        className={cx('tab',{ 'active': handleActive(`/forecast-eight-day/${+params.id || 0}` )})} 
        onClick={handleForecastEightDay}
      >
        8 days
      </div>
    </div>
  )
}
