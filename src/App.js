import React from 'react';
import CitySearch from './components/layout/CitySearch';
import Dashboard from './components/layout/Dashboard';
import Footer from './components/layout/Footter';

function App() {
  return (
    <div className="App">
      <CitySearch />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
