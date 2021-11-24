import React from 'react';
import cn from 'classnames/bind';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { currentWeatherSelector } from '../../redux/selector/selector';

import styles from './style.module.scss';
import { DownSunsetSvg, SunsetSvg, UpSunsetSvg } from '../../assets/icon';
import CardDataToday from '../../components/CardDataToday';

const cx = cn.bind(styles);

export default function CardToday() {
	const currentWeather = useSelector(currentWeatherSelector);



	if(!currentWeather) return null;

	const {
		name, main, sys, wind, visibility
	} = currentWeather;

  const weatherTodayData = [
    {
      svg: null,
      label: 'High / Low',
      value: `${main.temp_max}/${main.temp_min}`
    },
    {
      svg: null,
      label: 'Wind',
      value: `${wind.speed} m/s`
    },
    {
      svg: null,
      label: 'Humidity',
      value: `${main.humidity}%`
    },
    {
      svg: null,
      label: 'Pressure',
      value: `${main.pressure} in`
    },
    {
      svg: null,
      label: 'Visibility',
      value: `${visibility / 1000} mi`
    },
  ]

	return (
		<div className={cx('currentWeather')}>
      <div className={cx('title')}>Weather Today in {name}, {sys.country}</div>
      <div className={cx('todayDetailsCard')}>
        <div className={cx('feelsLikeBlock')}>
          <span className={cx('tempFeels')} feelsLikeBlock >{main.feels_like}°</span>
          <span>Feels Like</span>         
        </div>
        <div className={cx('sunsetBlock')}>
          <SunsetSvg className={cx('sunsetSvg')}/>
          <div className={cx('sunset')}>
            <div className={cx('leftTime')}>
              <UpSunsetSvg className={cx('arrow')} />
              {moment.unix(sys.sunrise).format('h:mm a')}
            </div>
            <div>
              <DownSunsetSvg className={cx('arrow')} />  
              {moment.unix(sys.sunset).format('h:mm a')}
            </div>
          </div>
        </div>
      </div>
      {
        weatherTodayData.map(item => (
          <CardDataToday value={item.value} label={item.label} />
        ))
      }
		</div>
	)
}