import React from 'react';
import cn from 'classnames/bind';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { currentWeatherSelector } from '../../redux/selector/selector';
import { DownSunsetSvg, SunsetSvg, UpSunsetSvg } from '../../assets/icon';
import { CardDataToday, WrapperBlock } from '../../components';

import styles from './style.module.scss';

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
		<WrapperBlock
      title={`Weather Today in ${name}, ${sys.country}`}
    >
      <div className={cx('today-details-dard')}>
        <div className={cx('feelsLike-block')}>
          <span className={cx('temp-feels')} feelsLikeBlock >{main.feels_like}°</span>
          <span>Feels Like</span>         
        </div>
        <div className={cx('sunset-block')}>
          <SunsetSvg className={cx('sunset-svg')}/>
          <div className={cx('sunset')}>
            <div className={cx('left-time')}>
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
		</WrapperBlock>
	)
}
