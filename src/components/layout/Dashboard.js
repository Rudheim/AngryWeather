import React, { useContext } from 'react';
import MainScreen from '../dashboard/MainScreen';
import CityInfo from '../dashboard/CityInfo';
import FiveDaysForecast from '../dashboard/FiveDaysForecast';
import TwelveHourForecast from '../dashboard/TwelveHourForecast';
import GeoInfo from '../dashboard/GeoInfo';
import CitySearch from '../dashboard/CitySearch';
import { ThemeContext } from '../contexts/ThemeContext';
import { CityContext } from '../contexts/CityContext';

const Dashboard = () => {

  const {cityDet} = useContext(CityContext)
  const {darkTheme} = useContext(ThemeContext);

  const theme = darkTheme.isDarkTheme ? darkTheme.light : darkTheme.dark

  return ( 
    Object.keys(cityDet).length > 0 ? (
      <div className={`container ${theme.bg}`}>
        <div className="row">
          <div className="col s12 m6">
            <CitySearch />
            <MainScreen />
            <div className="row">
              <div className="col s12 m12 l6">
                <TwelveHourForecast />
              </div>
              <div className="col s12 m12 l6">
                <CityInfo />
                <GeoInfo />
              </div>
            </div>
          </div>
          <div className="col s12 m6">
            <FiveDaysForecast />
          </div>
        </div>
      </div>
      ) : (
      <div className='container transparent'>
            <CitySearch />
      </div>
      )
   );
}
 
export default Dashboard;