import React from 'react';
import './App.css';
import { Card, Container } from 'react-bootstrap';
import FilterOrder from './components/FilterOrder';
import FilterPlanets from './components/FilterPlanets';
import FilterSelects from './components/FilterSelects';
import SearchPlanets from './components/SearchPlanets';
import Logo from './components/Logo';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container fluid>
      <PlanetsProvider>
        <Logo />
        <Card className="bg-dark text-white p-3 m-5 d-flex ">
          <SearchPlanets />
          <div className="d-flex justify-content-center mb-3">
            <FilterPlanets />
            <FilterOrder />
          </div>
          <FilterSelects />
          <Table />
        </Card>
      </PlanetsProvider>
    </Container>
  );
}

export default App;
