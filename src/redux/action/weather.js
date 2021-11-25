import { createAction } from 'redux-actions';
import { api, API_KEY } from '../../constans/api';
import { GET_CURRENT_WEATHER, GET_ONE_CALL_WEATHER  } from '../../constans/action';

export const getWeatherCity = createAction(GET_CURRENT_WEATHER);
export const getOneCallWeather = createAction(GET_ONE_CALL_WEATHER)

export const weatherCity = (city_name) => async (dispatch) => {
  const res = await api.get(`weather?q=${city_name}&units=metric&appid=${API_KEY}`);
  dispatch(getWeatherCity(res.data))
};

export const oneCallWeather = (lat, lon) => async (dispatch) => {
  const res = await api.get(`onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
  dispatch(getOneCallWeather(res.data))
} 