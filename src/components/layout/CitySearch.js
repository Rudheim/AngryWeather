import React, { useState, useContext } from 'react';
import axios from 'axios';
import { CityContext } from '../contexts/CityContext'
import { WeatherContext } from '../contexts/WeatherContext'
import { FiveDayForecastContext } from '../contexts/FiveDayForecastContext'
import { TwelveHourForecastContext } from '../contexts/TwelveHourForecasstContext'

const CitySearch = () => {

  const [city, setCity] = useState('')
  const {SetCityDet} = useContext(CityContext)
  const {SetWeather} = useContext(WeatherContext)
  const {SetFiveDayForecast} = useContext(FiveDayForecastContext)
  const {SetTwelveHourForecast} = useContext(TwelveHourForecastContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    const key = 'kXEQIlo2o3XscDHxsqyHAYSvn5mthJRb';
    const query = `?apikey=${key}&q=${city}`;
    axios
      .get('http://dataservice.accuweather.com/locations/v1/cities/search' + query)
      .then(res => {
        SetCityDet(
          {
            cityName: res.data[0].AdministrativeArea.EnglishName,
            countryShort: res.data[0].Country.ID,
            country: res.data[0].Country.EnglishName,
            latitude: res.data[0].GeoPosition.Latitude,
            longitude: res.data[0].GeoPosition.Longitude,
            elevation: res.data[0].GeoPosition.Elevation.Metric.UnitType,
            region: res.data[0].Region.EnglishName,
            timezone: res.data[0].TimeZone.Code
          })
        axios
          .get('http://dataservice.accuweather.com/currentconditions/v1/' + res.data[0].Key + `?apikey=${key}`)
          .then(res => {
            SetWeather({
              precipitation: res.data[0].HasPrecipitation,
              dayTime: res.data[0].IsDayTime,
              precipitationType: res.data[0].PrecipitationType,
              temperature: res.data[0].Temperature.Metric.Value,
              unit: res.data[0].Temperature.Metric.Unit,
              weatherIcon: res.data[0].WeatherIcon,
              weatherText: res.data[0].WeatherText
            })
          })
        axios
          .get('http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/' + res.data[0].Key + `?apikey=${key}`)
          .then(res => {
            SetTwelveHourForecast(res.data)
          })
        axios
          .get('http://dataservice.accuweather.com/forecasts/v1/daily/5day/' + res.data[0].Key + `?apikey=${key}`)
          .then(res => {
            SetFiveDayForecast(res.data.DailyForecasts)
          })
      })
    e.target.reset();
  }

  return ( 
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="city_search">Enter the city</label>
          <input className="validate" type="text" name="city_search" onChange={e => setCity(e.target.value.trim())}/>
        </div>
      </form>
    </div>
   );
}
 
export default CitySearch;