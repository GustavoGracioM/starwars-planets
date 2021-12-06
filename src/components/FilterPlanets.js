import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import { option } from '../services/informationTable';

function FilterPlanets() {
  const {
    filterByNumericValue: { column, comparison, value },
    filterByNumericValue,
    filterByNumericValues,
    setFilterByNumericValue,
    setFilterByNumericValues,
    setIsFilter,
    columns,
    setColumns,
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
    setColumns(columns.filter((c) => c !== filterByNumericValue.column));
  }

  return (
    <form onChange={ handleChange } onSubmit={ handleSubmit }>
      <select data-testid="column-filter" name="column" value={ column }>
        {!columns.length < 1
        && columns.map((op) => (<option key={ op }>{op}</option>))}
      </select>
      <select data-testid="comparison-filter" name="comparison" value={ comparison }>
        {option.map((op) => (
          <option key={ op }>{op}</option>
        ))}
      </select>
      <input type="number" value={ value } name="value" data-testid="value-filter" />
      <button type="submit" data-testid="button-filter">Filtrar</button>
    </form>
  );
}

export default FilterPlanets;
