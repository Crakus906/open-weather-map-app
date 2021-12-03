/* eslint-disable react/prop-types */
import React from 'react';
import cn from 'classnames/bind';
import styles from './style.module.scss';

const cx = cn.bind(styles);

export default function Day({
  item,
}) {
  return (
    <div className={cx('container-day')}>
      <div className={cx('title')}>{item.dt_txt.split(' ')[1]}</div>
    </div>
  );
}
