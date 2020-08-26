import React, { useState, useContext } from 'react';
import axios from 'axios';
import { WeatherContext } from '../contexts/WeatherContext'
import { motion } from 'framer-motion'
import { useHistory } from 'react-router-dom';

const searchBar = {
  hidden: { x: '-100vw' },
  visible: { x: 0, transition: { delay: 1 } },
  exit:{ x: '-100vw', transition: { duration: 1, ease: 'easeInOut'} }
}

const zoomVaraints = {
  animate:{ scale: 1.5, transition: { duration: 1, yoyo: Infinity } }
}

const CitySearch = () => {

  const location = useHistory();

  const [city, setCity] = useState('');
  const [err_msg, setErr] = useState('');
  const {SetCityDet, SetWeather, SetFiveDayForecast, SetTwelveHourForecast} = useContext(WeatherContext)

  const handleSubmit = (e) => {
    e.preventDefault();

    const loading_circle = document.querySelector('.lds-dual-ring');
    loading_circle.style.display = 'inline-block';

    const key = 'YvtufP14SPxpY1nvJozX0PU1qmTRDQ1A';
    const query = `?apikey=${key}&q=${city}`;
    axios
      .get('https://dataservice.accuweather.com/locations/v1/cities/search' + query)
      .then(res => {
        setErr('');
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
          .get('https://dataservice.accuweather.com/currentconditions/v1/' + res.data[0].Key + `?apikey=${key}`)
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
          .get('https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/' + res.data[0].Key + `?apikey=${key}`)
          .then(res => {
            SetTwelveHourForecast(res.data)
          })
        axios
          .get('https://dataservice.accuweather.com/forecasts/v1/daily/5day/' + res.data[0].Key + `?apikey=${key}`)
          .then(res => {
            SetFiveDayForecast(res.data.DailyForecasts)
          })
          .then(() => {
            loading_circle.style.display = 'none';
            location.push("/weather")
          })
      }).catch((err) => {
        loading_circle.style.display = 'none'
        setErr('Cannot find given city name')
      })
    setCity('');
  }

  return ( 
    <motion.form onSubmit={handleSubmit} variants={searchBar} initial='hidden' animate='visible' exit='exit' >
      <div className="input-field">
        <motion.i className="material-icons prefix blue-text" variants={zoomVaraints} animate='animate' >search</motion.i>
        <label htmlFor="city_search">Enter the city</label>
        <input className="validate" type="text" name="city_search" onChange={e => setCity(e.target.value.trim())}/>
        <p className="center red-text text-darken-2">{err_msg}</p>
        <div className="center"><div className="lds-dual-ring"></div></div>
      </div>
    </motion.form>
  );
}
 
export default CitySearch;