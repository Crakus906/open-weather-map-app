import React from 'react';
import cn from 'classnames/bind';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { currentWeatherSelector } from '../../redux/selector/selector';

import styles from './style.module.scss';

const cx = cn.bind(styles);

export default function CurrentWeather() {
	const weatherData = useSelector(currentWeatherSelector)

	if(!weatherData) return null;

	const {
		name, 
		weather,
		main,
	} =  weatherData;

	return (
		<div className={cx('currentWeather')}>
      <div className={cx('locationWeather')}>
        <span>City: {name}</span>
        <span>{moment.utc().format('LLLL')}</span>
			</div>
			<div className={cx('titleblock')}>
        <span className={cx('temp')}>{main.temp}°C</span>
        <img src={`http://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`} alt="" />
			</div>
      <div className={cx('description')}>{weather[0].description}<div>{main.temp_max}°/{main.temp_min}°</div></div>
		</div>
	)
}
