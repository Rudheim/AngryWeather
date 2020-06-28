import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CitySearch = () => {

  const [city, setCity] = useState('')
  const [cityDet, SetCityDet] = useState({
    cityName: '',
    countryShort: '',
    country: '',
    latitude: '',
    longitude: '',
    elevation: '',
    region: '',
    area: '',
    timezone: ''
  })
  const [weather, SetWeather] = useState({
    precipitation: '',
    dayTime: '',
    precipitationType: '',
    temperature: '',
    weatherIcon: '',
    weatherText: ''
  })
  const [fiveDayForecast, SetFiveDayForecast] = useState([])
  const [twelveHourForecast, SetTwelveHourForecast] = useState ([])

  const handleSubmit = (e) => {
    e.preventDefault();
    const key = 'Tm6UdZQDmYGkqaGnzvwGKupkPASVkrPR';
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
            area: res.data[0].SupplementalAdminAreas[0].EnglishName,
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
              weatherIcon: res.data[0].WeatherIcon,
              weatherText: res.data[0].WeatherText
            })
          })
        axios
          .get('http://dataservice.accuweather.com/forecasts/v1/daily/5day/' + res.data[0].Key + `?apikey=${key}`)
          .then(res => {
            SetFiveDayForecast(res.data.DailyForecasts)
          })
        axios
          .get('http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/' + res.data[0].Key + `?apikey=${key}`)
          .then(res => {
            SetTwelveHourForecast(res.data)
          })
      })
    e.target.reset();
  }

  useEffect(() => {
    console.log(cityDet)
  }, [cityDet])

  useEffect(() => {
    console.log(weather)
  }, [weather])

  useEffect(() => {
    console.log(fiveDayForecast)
  }, [fiveDayForecast])

  useEffect(() => {
    console.log(twelveHourForecast)
  }, [twelveHourForecast])

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