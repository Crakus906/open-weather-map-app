import React from 'react';
import cn from 'classnames/bind';

import styles from './style.module.scss';
import Input from '../Input';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { weatherCity } from '../../redux/action/weather';
import debounce from 'lodash/debounce';

const cx = cn.bind(styles);

export default function Tabs() {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className={cx('tabs')}>
      <div onClick={() => history.push('/today')}>Today</div>
      <div onClick={() => history.push('/hourly')}>Hourly</div>
    </div>
  )
}
