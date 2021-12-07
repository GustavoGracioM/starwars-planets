import React from 'react';
import './App.css';
import FilterOrder from './components/FilterOrder';
import FilterPlanets from './components/FilterPlanets';
import FilterSelects from './components/FilterSelects';
import SearchPlanets from './components/SearchPlanets';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <SearchPlanets />
      <FilterPlanets />
      <FilterOrder />
      <FilterSelects />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
