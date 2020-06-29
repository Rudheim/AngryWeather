import React, { useContext } from 'react';
import { FiveDayForecastContext } from '../contexts/FiveDayForecastContext';


const FiveDaysForecast = () => {

  const {fiveDayForecast} = useContext(FiveDayForecastContext)

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
    <div className="card blue-grey darken-1">
      <div className="card-content white-text row">
        <table className="highlight">
          <tbody>
              {forecastDailyList}
          </tbody>
        </table>
      </div>
    </div>
  );
}
 
export default FiveDaysForecast;