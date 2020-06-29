import React from 'react';
import CitySearch from './components/layout/CitySearch';
import Dashboard from './components/layout/Dashboard';
import Footer from './components/layout/Footter';
import CityProvider from './components/contexts/CityContext';
import WeatherProvider from './components/contexts/WeatherContext';
import FiveDayForecastProvider from './components/contexts/FiveDayForecastContext';
import TwelveHourForecastProvider from './components/contexts/TwelveHourForecasstContext';

function App() {
  return (
    <div className="App">
      <CityProvider>
        <WeatherProvider>
          <FiveDayForecastProvider>
            <TwelveHourForecastProvider>
              <CitySearch />
              <Dashboard />
              </TwelveHourForecastProvider>
            </FiveDayForecastProvider>
          </WeatherProvider>
      </CityProvider>
      <Footer />
    </div>
  );
}

export default App;
