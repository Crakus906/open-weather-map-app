import React from 'react';
import cn from 'classnames/bind';
import moment from 'moment';

import styles from './style.module.scss';

const cx = cn.bind(styles);

export default function DayCard({ item, id , handleClickItem, idItem}) {

  return (
    <div 
      key={id}
      className={cx('item-day', { 'item-day-active': idItem === id})}
      onClick={() => handleClickItem(id, item.dt)}
    >
      {moment.unix(item.dt).format('dddd')}
      <img src={`http://openweathermap.org/img/wn/${item.weather[0]?.icon}@2x.png`} alt={item.weather[0]?.description} />
      <div className={cx('temp')}>
        <div className={cx('temp-block')}>
          <span className={cx('label-temp')}>min</span>
          <span  className={cx('min')}>{Math.round(item.temp.min)}</span> 
        </div>
        <div className={cx('temp-block')}>
          <span className={cx('label-temp')}>max</span>
          <span>{Math.round(item.temp.max)} </span>
        </div>
      </div>
    </div>
    )
}
