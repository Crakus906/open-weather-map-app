import React, { useState } from 'react';
import cn from 'classnames/bind';
import moment from 'moment';
import { DayCard, DetailsDay, WrapperBlock } from '../../components';

import styles from './style.module.scss';
import { useSelector } from 'react-redux';
import { oneCallWeatherSelector } from '../../redux/selector/selector';
import { shallowEqual } from 'react-redux';
import { useHistory } from 'react-router';

const cx = cn.bind(styles);

export default function ForecastEightDays() {
  const history = useHistory();
  const [show, setShow] = useState(null);
  const [idItem, setItemId] = useState(Number);
  const oneCallWeather = useSelector(oneCallWeatherSelector);

  if(!oneCallWeather) return null;

  const {
    daily, timezone
  } = oneCallWeather;


  const handleClickItem = (id, dt) => {
    setShow(true);
    setItemId(id);
    history.push(`/forecast-eight-day/${moment.unix(dt).format('L').split('/').join('-')}`)
   ;
  };

  const currentDay = daily.find((item, i) => i === idItem)

	return (
    <WrapperBlock
      title={`City: ${timezone}`}
      classname='eight'
    >
      <div className={cx('container')}>
        {daily.map((item, id) => (
          <DayCard
            item={item}
            id={id}
            handleClickItem={handleClickItem}
          />
        ))}       
      </div>
      {show !== null ? <DetailsDay currentDay={currentDay} /> : null
}
		</WrapperBlock>
	)
}
