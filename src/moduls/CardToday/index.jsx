import React from 'react';
import cn from 'classnames/bind';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { currentWeatherSelector, oneCallWeatherSelector } from '../../redux/selector/selector';
import { DownSunsetSvg, SunsetSvg, UpSunsetSvg } from '../../assets/icon';
import { CardDataToday, WrapperBlock } from '../../components';

import styles from './style.module.scss';

const cx = cn.bind(styles);

export default function CardToday() {
	const currentWeather = useSelector(currentWeatherSelector);
  const oneCallWeather = useSelector(oneCallWeatherSelector)

	if(!currentWeather || !oneCallWeather) return null;

	const {
		name, sys,
	} = currentWeather;

  const {
    humidity, pressure, visibility, dew_point, temp, wind_gust, feels_like
  } = oneCallWeather.current

  const weatherTodayData = [
    {
      svg: null,
      label: 'Dew Point',
      value: `${Math.round(dew_point)}`
    },
    {
      svg: null,
      label: 'Wind',
      value: `${Math.round(wind_gust)} km/h`
    },
    {
      svg: null,
      label: 'Humidity',
      value: `${humidity}%`
    },
    {
      svg: null,
      label: 'Pressure',
      value: `${pressure} in`
    },
    {
      svg: null,
      label: 'Visibility',
      value: `${visibility / 1000} mi`
    },
    {
      svg: null,
      label: 'temp',
      value: `${Math.round(temp)} °C `
    },
  ]

	return (
		<WrapperBlock
      title={`Weather Today in ${name}, ${sys.country}`}
    >
      <div className={cx('today-details-dard')}>
        <div className={cx('feelsLike-block')}>
          <span className={cx('temp-feels')} feelsLikeBlock >{Math.round(feels_like)}°</span>
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
