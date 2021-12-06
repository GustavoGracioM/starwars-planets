import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import { option1, option2 } from '../services/informationTable';

function FilterPlanets() {
  const {
    filterByNumericValue: { column, comparison, value },
    filterByNumericValue,
    filterByNumericValues,
    setFilterByNumericValue,
    setFilterByNumericValues,
    setIsFilter,
  } = useContext(PlanetsContext);

  function handleChange({ target }) {
    const nameInput = target.name;
    const valueInput = target.value;
    setFilterByNumericValue({ ...filterByNumericValue, [nameInput]: valueInput });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFilterByNumericValues([...filterByNumericValues, filterByNumericValue]);
    setIsFilter(true);
  }

  return (
    <form onChange={ handleChange } onSubmit={ handleSubmit }>
      <select data-testid="column-filter" name="column" value={ column }>
        {option1.map((option) => (
          <option key={ option }>{option}</option>
        ))}
      </select>
      <select data-testid="comparison-filter" name="comparison" value={ comparison }>
        {option2.map((option) => (
          <option key={ option }>{option}</option>
        ))}
      </select>
      <input type="number" value={ value } name="value" data-testid="value-filter" />
      <button type="submit" data-testid="button-filter">Filtrar</button>
    </form>
  );
}

export default FilterPlanets;
