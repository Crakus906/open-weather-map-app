import React  from 'react';
import cn from 'classnames/bind';
import Weather from '../Weather';

import styles from './style.module.scss';
import { ForecastEightDays } from '../../moduls';

const cx = cn.bind(styles);

export default function EightDays() {

  return (
    <Weather >
      <ForecastEightDays />
    </Weather>
  )
}
