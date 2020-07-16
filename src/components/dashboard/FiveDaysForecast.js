import React, { useContext } from 'react';
import { WeatherContext } from '../contexts/WeatherContext'


const FiveDaysForecast = () => {

  const {fiveDayForecast} = useContext(WeatherContext)

  const forecastDailyList = fiveDayForecast.length ? (
    fiveDayForecast.map(daily => {
      return (
        <tr key={daily.EpochDate}>
          <td>{daily.Date.slice(6, 10)}</td>
          <td><img src={`/img/icons/${daily.Day.Icon}.png`} alt=" "/></td>
          <td>{Math.ceil((daily.Temperature.Maximum.Value - 32) * (5/9))} &deg;C</td>
          <td><img src={`/img/icons/${daily.Night.Icon}.png`} alt=" "/></td>
          <td>{Math.ceil((daily.Temperature.Minimum.Value - 32) * (5/9))} &deg;C</td>
        </tr>
      )
    })
  ) : (
    <tr>
      <td>No data</td>
    </tr>
  )

  return ( 
    <div className="card day_night">
      <div className="card-content black-text row">
        <table className="highlight">
          <thead>
            <tr>
                <th>Date</th>
                <th></th>
                <th>Day</th>
                <th></th>
                <th>Night</th>
            </tr>
          </thead>
          <tbody>
              {forecastDailyList}
          </tbody>
        </table>
      </div>
    </div>
  );
}
 
export default FiveDaysForecast;