import { createAction } from 'redux-actions';
import { api, API_KEY } from '../../constans/api';
import { GET_CURRENT_WEATHER, GET_ONE_CALL_WEATHER, GET_CALL_FIVE_DAYS } from '../../constans/action';

export const getWeatherCityAction = createAction(GET_CURRENT_WEATHER);
export const getOneCallWeatherAction = createAction(GET_ONE_CALL_WEATHER);
export const getCallFiveDaysAction = createAction(GET_CALL_FIVE_DAYS);

export const weatherCity = (cityName) => async (dispatch) => {
  const res = await api.get(`weather?q=${cityName}&units=metric&appid=${API_KEY}`);

  const data = res?.data;

  dispatch(getWeatherCityAction(data));
  dispatch(oneCallWeather(data.coord.lat, data.coord.lon));
  dispatch(callFiveDays(data.name, data.sys.country));
};

export const oneCallWeather = (lat, lon) => async (dispatch) => {
  const res = await api.get(`onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
  dispatch(getOneCallWeatherAction(res.data));
};

export const callFiveDays = (cityName, countryCode) => async (dispatch) => {
  const res = await api.get(`forecast?q=${cityName},${countryCode}&units=metric&appid=${API_KEY}`);
  dispatch(getCallFiveDaysAction(res.data));
};
