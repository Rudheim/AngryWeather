import React, { useContext } from 'react';
import { WeatherContext } from '../contexts/WeatherContext';

const MainScreen = () => {

  const {cityDet, weather} = useContext(WeatherContext)

  const background = weather.dayTime ? (
    'light-blue'
  ) : (
    'blue-grey darken-4'
  )

  return ( 
    Object.keys(cityDet).length > 0 && Object.keys(weather).length > 0 ? (
      <div className={`card ${background} darken-1 main-card`}>
        <div className="card-content white-text center">
        <div className="sun-img">
          <img src={`/img/icons/${weather.weatherIcon}.png`} alt="{weather.weatherText}"/>
          </div>

          <h3>{cityDet.cityName}</h3>
          <h4>{cityDet.country}</h4>
          <h2>{weather.temperature} &deg;{weather.unit}</h2>
        </div>
      </div>      
    ) : (
      <div className={`card blue-grey darken-1`}>
        <div className="card-content white-text">
         <p>No data</p>
        </div>
      </div>   
    )
  );
}
 
export default MainScreen;