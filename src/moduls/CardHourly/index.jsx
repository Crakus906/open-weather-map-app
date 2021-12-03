/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import cn from 'classnames/bind';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { WrapperBlock, RowCard } from '../../components';
import { oneCallWeatherSelector, currentWeatherSelector } from '../../redux/selector/selector';

import styles from './style.module.scss';

const cx = cn.bind(styles);

const dataHourlyRowCard = ['dt', 'temp', 'weather', 'wind_gust'];
const dataPopap = ['feels_like', 'wind_gust', 'humidity', 'uvi'];

export default function CardHourly() {
  const [show, setShow] = useState(false);
  const currentWeather = useSelector(currentWeatherSelector);
  const oneCallData = useSelector(oneCallWeatherSelector);

  if (!oneCallData) return null;

  const dataTime = oneCallData?.hourly.map((item) => moment.unix(item.dt).format('dddd MMMM, Do'));
  const days = dataTime.filter((item, pos) => dataTime.indexOf(item) === pos);

  const getDescription = (obj = {}, key) => {
    if (obj[key] === undefined) return '-';
    if (key === 'weather') {
      return (
        <div className={cx('weather-main')}>
          <img
            src={`http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`}
            alt=""
          />
          <span>{obj.weather[0].main}</span>
        </div>
      );
    }
    if (key === 'dt') return moment.unix(obj[key]).format('h:mm:a ');
    return Math.round(obj[key]);
  };

  return (
    <WrapperBlock
      title={`Hourly Weather - ${currentWeather?.name}, ${currentWeather?.sys?.country}`}
      thisTime={`As of ${moment().format(' h:mm:a ')}`}
    >
      {days.map((day, i) => (
        <div key={i}>
          <span className={cx('day')}>{day}</span>
          {oneCallData.hourly.map((item, id) => (
            day === moment.unix(item.dt).format('dddd MMMM, Do')
              ? (
                <RowCard
                  rowCardData={dataHourlyRowCard}
                  item={item}
                  id={id}
                  setShow={setShow}
                  show={show}
                  getDescription={getDescription}
                />
              ) : null
          ))}
        </div>
      ))}

    </WrapperBlock>
  );
}
