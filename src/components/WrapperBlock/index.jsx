import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames/bind';

import styles from './style.module.scss';

const cx = cn.bind(styles);

export default function CardDataToday({
  children, title, thisTime, classname,
}) {
  return (
    <div className={cx('wrapper-block', { [classname]: classname })}>
      <div className={cx('title')}>{title}</div>
      {
        thisTime ? <div className={cx('this-time')}>{thisTime}</div> : null
      }
      {children}
    </div>
  );
}

CardDataToday.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  thisTime: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
};
