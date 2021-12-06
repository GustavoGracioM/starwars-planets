import React from 'react';
import './App.css';
import SearchPlanets from './components/SearchPlanets';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <SearchPlanets />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
