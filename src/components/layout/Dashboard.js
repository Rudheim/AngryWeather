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
            <FiveDaysForecast />              
          </div>
          <div className="col s12 m6">
            <TwelveHourForecast />
            <div className="row">
              <div className="col s12 m6">
                <CityInfo />
              </div>
              <div className="col s12 m6">
                <GeoInfo />
              </div>
            </div>
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