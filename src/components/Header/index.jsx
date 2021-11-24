import React from 'react';
import cn from 'classnames/bind';

import styles from './style.module.scss';
import Input from '../Input';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { weatherCity } from '../../redux/action/weather';
import debounce from 'lodash/debounce';

const cx = cn.bind(styles);

export default function Header() {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleOnChange = debounce((e) => {
        dispatch(weatherCity(e))
    },500)
    return (
        <div className={cx('header')}>
            <div className={cx('logo')}>Forecast</div>
            <Formik
                initialValues={{ search: '' }}
                onSubmit={(values) => {
                    handleOnChange(values.search)
                    history.push('/today')
                }
            }>
                <Form>
                    <div className={cx('block-search')}>
                        <Input 
                            type="text"    
                            name="search"
                            placeholder="search"
                        />
                        <button type="submit">Search</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}