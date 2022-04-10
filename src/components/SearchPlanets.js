import React, { useContext } from 'react';
import { Container, Form } from 'react-bootstrap';
import PlanetsContext from '../context/PlanetsContext';

function SearchPlanets() {
  const { filterByName, setFilterByName } = useContext(PlanetsContext);

  function handleChanges({ target }) {
    setFilterByName(target.value);
  }

  return (
    <Container className="mb-3">
      <h1 className="text-center mb-4 mt-5">Planets</h1>
      <Form.Control
        type="text"
        value={ filterByName }
        name="searchPlanets"
        onChange={ handleChanges }
        className="input-search"
      />
    </Container>
  );
}

export default SearchPlanets;
