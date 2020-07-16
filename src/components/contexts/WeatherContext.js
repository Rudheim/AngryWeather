import React, { useState, createContext } from 'react';

export const WeatherContext = createContext();

const WeatherProvider = (props) => {

  const [cityDet, SetCityDet] = useState({});
  const [fiveDayForecast, SetFiveDayForecast] = useState([]);
  const [TwelveHourForecast, SetTwelveHourForecast] = useState ([]);
  const [weather, SetWeather] = useState({})

  return ( 
    <WeatherContext.Provider value={{cityDet, SetCityDet, fiveDayForecast, SetFiveDayForecast, TwelveHourForecast, SetTwelveHourForecast, weather, SetWeather}}>
      {props.children}
    </WeatherContext.Provider>
  );
}
 
export default WeatherProvider;