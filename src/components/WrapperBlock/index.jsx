import React from 'react';
import cn from 'classnames/bind';

import styles from './style.module.scss';

const cx = cn.bind(styles);

export default function CardDataToday({ children, title, thisTime }) {

  return (
    <div className={cx('wrapper-block')}>
      <div className={cx('title')}>{title}</div>
      {
        thisTime ? <div className={cx('this-time')}>{thisTime}</div> : null
      }
      {children}
    </div>
  )
}
