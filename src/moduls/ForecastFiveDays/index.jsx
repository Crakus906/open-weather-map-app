/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import cn from 'classnames/bind';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import {
  DayCard, DetailsDay, ForecastDetailsDay, RowCard, WrapperBlock,
} from '../../components';
import { callFiveDaysSelector, oneCallWeatherSelector } from '../../redux/selector/selector';

import styles from './style.module.scss';

const rowCardData = ['dt', 'temp', 'weather', 'wind_gust', 'snow', 'rain'];

const cx = cn.bind(styles);

export default function ForecastFiveDays() {
  const [show, setShow] = useState(false);
  const [idItem, setIdItem] = useState('');
  const [keyTime, setKeyTime] = useState(moment().format(null));

  const history = useHistory();

  const fiveDays = useSelector(callFiveDaysSelector);
  const oneCallWeather = useSelector(oneCallWeatherSelector);

  if (!fiveDays || !oneCallWeather) return null;

  const {
    list,
  } = fiveDays;

  const {
    daily, timezone,
  } = oneCallWeather;

  // const handleClickItem = (id, time) => {
  //   setShow(!show);
  //   setIdItem(id);
  //   history.push(`/forecast-five-day/${id}`);
  // };

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
    if (key === 'temp') return obj.temp.day;
    if (key === 'dt') {
      return moment.unix(obj[key]).format('dddd');
    }
    return Math.round(obj[key]);
  };

  const filterListName = list.filter((item) => moment.unix(item.dt).format('dddd') === keyTime);

  return (
    <WrapperBlock
      title={`City: ${timezone}`}
    >
      {daily.slice(0, 5).map((item, id) => (
        <RowCard
          item={item}
          filterListName={filterListName}
          getDescription={getDescription}
          rowCardData={rowCardData}
          setKeyTime={setKeyTime}
        />
      ))}
    </WrapperBlock>
  );
}
