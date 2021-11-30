import React, { useState } from 'react';
import cn from 'classnames/bind';
import styles from './style.module.scss';

const cx = cn.bind(styles);

export default function DetailsDay({ currentDay }) {
  console.log(currentDay);
  return (
    <div>

      {currentDay.clouds}
    </div>
    )
}
