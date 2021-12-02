import React from 'react';
import cn from 'classnames/bind';
import { CardHourly } from '../../moduls';
import Weather from '../Weather';

import styles from './style.module.scss';

const cx = cn.bind(styles);

export default function Hourly() {
  return (
    <Weather>
      <CardHourly />
    </Weather>
  );
}
