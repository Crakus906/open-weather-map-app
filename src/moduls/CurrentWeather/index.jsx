import React from 'react';
import cn from 'classnames/bind';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { currentWeatherSelector } from '../../redux/selector/selector';
import { WrapperBlock } from '../../components';

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
    <WrapperBlock
      title={`City: ${name}`}
      thisTime={moment.utc().format('LLLL')}
    >
			<div className={cx('title-block')}>
        <span className={cx('temp')}>{Math.round(main.temp)}°C</span>
        <img src={`http://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`} alt="" />
			</div>
      <div className={cx('description')}>{weather[0].description}<div>{weather[0].main}</div></div>
		</WrapperBlock>
	)
}
