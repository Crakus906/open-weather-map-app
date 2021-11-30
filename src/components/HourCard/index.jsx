import React, { useState } from 'react';
import cn from 'classnames/bind';
import moment from 'moment';
import Popap from '../Popap';
import { ArrowSvg } from '../../assets/icon';

import styles from './style.module.scss';

const cx = cn.bind(styles);

export default function HourCard({ item, id }) {
  const [show, setShow] = useState(false);
  const [idItem, setIdItem] = useState(0);

  const hansleShowSvg = (e) => {
    setShow(!show);
    setIdItem(e)
  };

  return (
    <div className={cx('card-item')}>
      <div className={cx('summary')}>
        {moment.unix(item.dt).format('h:mm:a ')}
        <span>{Math.round(item.temp)}°</span>
        <div className={cx('weather-main')}>
          <img src={`http://openweathermap.org/img/wn/${item.weather[0]?.icon}@2x.png`} alt={item.weather[0]?.description} />
          <span>{item.weather[0].main}</span>
        </div>
        <div>{Math.round(item.wind_gust)} km/h</div>
        <ArrowSvg onClick={() => hansleShowSvg(id)} className={cx('arrow-svg',{ 'arrow-svg-active': id === idItem && show })} />
      </div>
      {show ? <Popap item={item} /> : null}
    </div>
  )
}
