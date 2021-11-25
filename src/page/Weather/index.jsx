import React from 'react';
import cn from 'classnames/bind';
import { Header, Tabs } from '../../components';

import styles from './style.module.scss';

const cx = cn.bind(styles);

export default function Weather({ children }) {
 
  return (
    <div className={cx('home')}>
      <Header />
      <Tabs />
      {children}
    </div>
  )
}
