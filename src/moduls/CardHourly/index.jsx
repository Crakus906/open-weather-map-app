import React from 'react';
import cn from 'classnames/bind';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { WrapperBlock, HourCard } from '../../components';
import { oneCallWeatherSelector, currentWeatherSelector } from '../../redux/selector/selector';

import styles from './style.module.scss';

const cx = cn.bind(styles);

export default function CardHourly() {
  const currentWeather = useSelector(currentWeatherSelector);
  const oneCallData = useSelector(oneCallWeatherSelector);

  if (!oneCallData) return null;

  const dataTime = oneCallData?.hourly.map((item) => moment.unix(item.dt).format('dddd MMMM, Do'));
  const days = dataTime.filter((item, pos) => dataTime.indexOf(item) === pos);

  return (
    <WrapperBlock
      title={`Hourly Weather - ${currentWeather?.name}, ${currentWeather?.sys?.country}`}
      thisTime={`As of ${moment().format(' h:mm:a ')}`}
    >
      {days.map((day) => (
        <>
          <span className={cx('day')}>{day}</span>
          {oneCallData.hourly.map((item, id) => (
            day === moment.unix(item.dt).format('dddd MMMM, Do')
              ? (
                <HourCard
                  item={item}
                  id={id}
                />
              ) : null
          ))}
        </>
      ))}

    </WrapperBlock>
  );
}
