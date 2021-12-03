/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import cn from 'classnames/bind';
import moment from 'moment';
import Popap from '../Popap';
import { ArrowSvg } from '../../assets/icon';

import styles from './style.module.scss';
import { ForecastDetailsDay } from '..';

const cx = cn.bind(styles);

export default function RowCard({
  item, id, filterListName, rowCardData, getDescription, setKeyTime,
}) {
  const [show, setShow] = useState(false);
  const [idItem, setIdItem] = useState(0);

  const hansleShowSvg = (e, time) => {
    setShow(!show);
    setIdItem(e);
    // setKeyTime(moment.unix(time).format('dddd'));
  };

  return (
    <div className={cx('card-item')}>
      <div className={cx('summary')}>
        {rowCardData?.map((key) => (
          <div>
            {getDescription(item, key)}
          </div>
        ))}
        <ArrowSvg onClick={() => hansleShowSvg(id, item.dt)} className={cx('arrow-svg', { 'arrow-svg-active': id === idItem && show })} />
      </div>
      {show && !filterListName ? <Popap item={item} /> : null}
      {show && filterListName ? <ForecastDetailsDay filterListName={filterListName} /> : null}
    </div>
  );
}
