/* eslint-disable import/no-anonymous-default-export */
import { GET_CURRENT_WEATHER, GET_ONE_CALL_WEATHER, GET_CALL_FIVE_DAYS } from '../../constans/action';
    
  const initState = {
    weatherCity: null,
    oneCallWeather: null,
    callFiveDays: null
  };
  
  export default (state = initState, { type, payload }) => {
    switch (type) {
      case GET_CURRENT_WEATHER:
        return {
          ...state,
          weatherCity: payload,
        };
      case GET_ONE_CALL_WEATHER: 
        return {
          ...state,
          oneCallWeather: payload,
        }
    case GET_CALL_FIVE_DAYS: 
        return {
          ...state, 
          callFiveDays: payload,
        }
      default:
        return state;
    }
  };