import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterSelects() {
  const {
    filterByNumericValues,
    setFilterByNumericValues,
    columns,
    setColumns } = useContext(PlanetsContext);

  function deletedFilter(value) {
    const x = filterByNumericValues.filter((f) => (f.column !== value.column));
    setFilterByNumericValues(x);
    setColumns([...columns, value.column]);
  }

  return (
    !filterByNumericValues.length < 1 && filterByNumericValues.map((value) => (
      <div key={ value.column } data-testid="filter">
        <span>{value.column}</span>
        <span>{value.comparison}</span>
        <span>{value.value}</span>
        <button
          type="button"
          onClick={ () => deletedFilter(value) }
        >
          X
        </button>
      </div>
    ))
  );
}

export default FilterSelects;
