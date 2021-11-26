import React from 'react';
import cn from 'classnames/bind';

import styles from './style.module.scss';

const cx = cn.bind(styles);

export default function CardDataToday({ label, value }) {

  return (
    <div className={cx('card-item')}>
      <div className={cx('label')}>
        {label}
      </div>
      <div className={cx('value')}>
        {value}
      </div>
    </div>
  )
}
