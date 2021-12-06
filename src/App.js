import React from 'react';
import './App.css';
import FilterPlanets from './components/FilterPlanets';
import SearchPlanets from './components/SearchPlanets';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <SearchPlanets />
      <FilterPlanets />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
