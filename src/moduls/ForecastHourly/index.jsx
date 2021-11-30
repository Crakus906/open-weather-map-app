import React from 'react';
import cn from 'classnames/bind';
import { WrapperBlock } from '../../components';

import styles from './style.module.scss';
import { useSelector } from 'react-redux';
import { oneCallWeatherSelector } from '../../redux/selector/selector';
import moment from 'moment';
import { useHistory } from 'react-router';
const cx = cn.bind(styles);

export default function ForecastHourly() {
  const history = useHistory();
  const hourlyData = useSelector(oneCallWeatherSelector);

  if(!hourlyData) return null;

  const fistFiveItem =  hourlyData.hourly.slice(0,5);

  const handleClickHourlyPage = () => {
    history.push('/hourly')
  };

	return (
		<WrapperBlock
      title='Hourly Forecast'
      thisTime=''
    >
      <div className={cx('hourly-forecast')}>
          {fistFiveItem?.map((item, i) => (
            <div className={cx('hourly-forecast-item')}>
              {i === 0 ? 'Now' : moment.unix(item.dt).format('h:mm a ')}
              <div>{Math.round(item.temp)}</div>
              <img src={`http://openweathermap.org/img/wn/${item.weather[0]?.icon}@2x.png`} alt={item.weather[0]?.description} />
              <div>{item.humidity}%</div>
            </div>
          ))}
      </div>   
      <button
        onClick={handleClickHourlyPage}
      >
        Next 48 Hours
      </button>
		</WrapperBlock>
	)
}
