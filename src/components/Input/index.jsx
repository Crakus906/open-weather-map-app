import React from 'react';
import cn from 'classnames/bind';
import { useField } from 'formik';

import styles from './style.module.scss';

const cx = cn.bind(styles);

const Input = (props) => {
  const {
    type,
    label,
    onChange,
    name,
    placeholder,
    variant,
  } = props;

  const [field, meta] = useField(name);

  return (
    <div className={cx('block')}>
      <div className={cx('label')}>{label}</div>
      <input
        className={cx('input', { [variant]: variant })}
        onChange={onChange}
        type={type}
        name={field.name}
        placeholder={placeholder}
        {...field}
      />
      {meta.error && meta.touched && <div>{meta.error}</div>}
    </div>
  );
};

export default Input;
