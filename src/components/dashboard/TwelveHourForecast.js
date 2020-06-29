import React, { useContext } from 'react';
import { TwelveHourForecastContext } from '../contexts/TwelveHourForecasstContext'

const TwelveHourForecast = () => {

  const {TwelveHourForecast} = useContext(TwelveHourForecastContext)

  const forecastList = TwelveHourForecast.length ? (
    TwelveHourForecast.map(hourly => {
      return (
        <tr key={hourly.EpochDateTime}>
          <td>{hourly.DateTime.slice(11, 16)}</td>
          <td><img src={`/img/icons/${hourly.WeatherIcon}.png`} alt=" "/></td>
          <td className="blue-text">
            {hourly.HasPrecipitation ? (
              hourly.PrecipitationProbability + '%'
            ) : (
              ''
            )}
          </td>
          <td>{Math.ceil((hourly.Temperature.Value - 32) * (5/9))} &deg;C</td>
        </tr>
      )
    })
  ) : (
    <tr>
      <td>No data</td>
    </tr>
  )
  return ( 
    <div className="card blue-grey darken-1">
      <div className="card-content white-text row">
        <table className="highlight">
          <tbody>
              {forecastList}
          </tbody>
        </table>
      </div>
    </div>
  );
}
 
export default TwelveHourForecast;