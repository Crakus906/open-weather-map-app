import { GET_CURRENT_WEATHER, GET_ONE_CALL_WEATHER } from '../../constans/action';
    
  const initState = {
    weatherCity: null,
    oneCallWeather: null
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
      default:
        return state;
    }
  };