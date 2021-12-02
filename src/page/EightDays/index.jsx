import React from 'react';
import cn from 'classnames/bind';
import Weather from '../Weather';
import { ForecastEightDays } from '../../moduls';

import styles from './style.module.scss';

const cx = cn.bind(styles);

export default function EightDays() {
  return (
    <Weather>
      <ForecastEightDays />
    </Weather>
  );
}
