/* eslint-disable import/no-anonymous-default-export */
import {
    getWeatherCity
  } from '../action/weather';
    
  const initState = {
    weatherCity: null,
  };
  
  export default (state = initState, { type, payload }) => {
    switch (type) {
      case `${getWeatherCity}`:
        return {
          ...state,
          weatherCity: payload
        };
      default:
        return state;
    }
  };