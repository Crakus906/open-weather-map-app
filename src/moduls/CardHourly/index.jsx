import React from 'react';
import cn from 'classnames/bind';
import { useSelector } from 'react-redux';
import { oneCallWeatherSelector } from '../../redux/selector/selector';

import styles from './style.module.scss';
import moment from 'moment';

const cx = cn.bind(styles);

export default function CardHourly() {
//  const {hourly}  = useSelector(oneCallWeatherSelector);
  const oneCallData  = useSelector(oneCallWeatherSelector);
  const a = oneCallData.hourly.map(item => moment(item.dt).format(''))

  console.log(a, );
	return (
		<div className={cx('cardHourly')}>
      {
        // oneCallData?.hourly.map(item => (<div>{moment(item.dt)}</div>))
      }
		</div>
	)
}
