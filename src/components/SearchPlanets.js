import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function SearchPlanets() {
  const { filterByName, setFilterByName } = useContext(PlanetsContext);

  function handleChanges({ target }) {
    setFilterByName(target.value);
  }

  return (
    <input
      type="text"
      data-testid="name-filter"
      value={ filterByName }
      name="searchPlanets"
      onChange={ handleChanges }
    />
  );
}

export default SearchPlanets;
