import React from 'react';
import cn from 'classnames/bind';
import { useLocation } from 'react-router-dom'
import { useHistory } from "react-router-dom";

import styles from './style.module.scss';

const cx = cn.bind(styles);

export default function Tabs() {
  const history = useHistory();
  const location = useLocation();

  const handleToday = () => {
    history.push('/today')
  };

  const handleHourly = () => {
    history.push('/hourly')
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
        className={cx('tab',{ 'active': location.pathname === '/hourly' })} 
        onClick={handleHourly}
      >
        Hourly
      </div>
    </div>
  )
}
