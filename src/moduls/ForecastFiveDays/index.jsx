import React from 'react';
import cn from 'classnames/bind';
import { WrapperBlock } from '../../components';

import styles from './style.module.scss';

const cx = cn.bind(styles);

export default function ForecastFiveDays() {
  return (
    <WrapperBlock
      title="City:"
      classname="eight"
    />
  );
}
