import React from 'react';
import cn from 'classnames/bind';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';

import styles from './style.module.scss';

const cx = cn.bind(styles);

export default function Weather({children}) {
 
  return (
    <div className={cx('home')}>
      <Header />
      <Tabs />
      {children}
    </div>
  )
}
