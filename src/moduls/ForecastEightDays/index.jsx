import React, { useEffect, useState } from 'react';
import cn from 'classnames/bind';
import moment from 'moment';
import { DayCard, DetailsDay, WrapperBlock } from '../../components';

import styles from './style.module.scss';
import { useSelector } from 'react-redux';
import { oneCallWeatherSelector } from '../../redux/selector/selector';
import { useHistory, useParams } from 'react-router';

const cx = cn.bind(styles);

export default function ForecastEightDays() {
  const history = useHistory();
  const params = useParams();
  const [show, setShow] = useState();
  const [idItem, setItemId] = useState(null);
  const oneCallWeather = useSelector(oneCallWeatherSelector);

  useEffect(() => {
    setItemId(+params.id)
  }, [])

  if(!oneCallWeather) return null;

  const {
    daily, timezone
  } = oneCallWeather;

  const handleClickItem = (id) => {
    setShow(true);
    setItemId(id);
    history.push(`/forecast-eight-day/${id}`);
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
            idItem={idItem}
          />
        ))}       
      </div>
      {currentDay && <DetailsDay currentDay={currentDay} />}
		</WrapperBlock>
	)
}
