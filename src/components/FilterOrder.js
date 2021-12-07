import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const filter = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water'];

function FilterOrder() {
  const { setOrder, sortColumn, setSortColumn } = useContext(PlanetsContext);

  function handleChange({ target }) {
    const valueInput = target.value;
    const nameInput = target.name;
    setSortColumn({ ...sortColumn, [nameInput]: valueInput });
  }

  function handleSumbit(event) {
    event.preventDefault();
    setOrder(sortColumn);
  }

  return (
    <form onChange={ handleChange } onSubmit={ handleSumbit }>
      <label htmlFor="ASC">
        Ascendente
        <input
          id="ASC"
          type="radio"
          name="sort"
          value="ASC"
          data-testid="column-sort-input-asc"
        />
      </label>
      <label htmlFor="DESC">
        Descendente
        <input
          id="DESC"
          type="radio"
          name="sort"
          value="DESC"
          data-testid="column-sort-input-desc"
        />
      </label>
      <select data-testid="column-sort" name="column">
        {filter.map((x) => (
          <option key={ x } value={ x }>{x}</option>
        ))}
      </select>
      <button type="submit" data-testid="column-sort-button">Ordenar</button>
    </form>
  );
}

export default FilterOrder;
