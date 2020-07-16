import React, { useContext } from 'react';
import { WeatherContext } from '../contexts/WeatherContext'
import { ThemeContext } from '../contexts/ThemeContext';

const TwelveHourForecast = () => {

  const {TwelveHourForecast} = useContext(WeatherContext);
  const {darkTheme} = useContext(ThemeContext);

  const theme = darkTheme.isDarkTheme ? darkTheme.light : darkTheme.dark

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
    <div className={`card ${theme.card}`}>
      <div className={`card-content ${theme.card_text}`}>
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