import { createAction } from 'redux-actions';
import { api, API_KEY } from '../../constans/api';

export const getWeatherCity = createAction('GET_WEATHER_CITY');

export const weatherCity = (city_name) => async (dispatch) => {
    const res = await api.get(`weather?q=${city_name}&units=metric&appid=${API_KEY}`);
    // const res = await api.get(`find?lat=55.5&lon=37.5&cnt=50&appid=${API_KEY}`);

    // api.openweathermap.org/data/2.5/box/city?bbox={zoom}&appid={API_KEY}
    dispatch(getWeatherCity(res.data))
  };