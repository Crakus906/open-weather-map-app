import React from 'react';
import cn from 'classnames/bind';
import styles from './style.module.scss';

const cx = cn.bind(styles);

export default function Day({title, description, temp, weather, feels_like }) {

  return (
    <div className={cx('container-day')}>
      <div className={cx('title')}>{title}:</div>
      <div className={cx('description')}>{description}</div>    
    </div>
  )
}
