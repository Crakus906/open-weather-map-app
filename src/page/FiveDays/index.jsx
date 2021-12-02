import React  from 'react';
import cn from 'classnames/bind';
import Weather from '../Weather';
import { ForecastFiveDays } from '../../moduls';

import styles from './style.module.scss';

const cx = cn.bind(styles);

export default function FiveDays() {

  return (
    <Weather >
      <ForecastFiveDays />
    </Weather>
  )
}
