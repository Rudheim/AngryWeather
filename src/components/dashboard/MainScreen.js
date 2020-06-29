import React, { useContext } from 'react';
import { CityContext } from '../contexts/CityContext'
import { WeatherContext } from '../contexts/WeatherContext'

const MainScreen = () => {

  const {cityDet} = useContext(CityContext)
  const {weather} = useContext(WeatherContext)

  const background = weather.dayTime ? (
    'blue'
  ) : (
    'blue-grey'
  )

  return ( 
    Object.keys(cityDet).length > 0 && Object.keys(weather).length > 0 ? (
      <div className={`card ${background} darken-1`}>
        <div className="card-content white-text">
          <img src={`/img/icons/${weather.weatherIcon}.png`} alt="{weather.weatherText}"/>
          <h2>{cityDet.cityName}</h2>
          <h5>{cityDet.country}</h5>
          <p>{weather.weatherText.toUpperCase()}</p>
          <h1>{weather.temperature} &deg;{weather.unit}</h1>
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