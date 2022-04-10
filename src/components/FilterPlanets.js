import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
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
    <Form
      onChange={ handleChange }
      onSubmit={ handleSubmit }
      className=" d-flex align-items-center"
    >
      <Form.Select
        name="column"
        value={ column }
        className="m-3"
      >
        {!columns.length < 1
        && columns.map((op) => (<option key={ op }>{op}</option>))}
      </Form.Select>
      <Form.Select
        name="comparison"
        value={ comparison }
        className="m-3"
      >
        {option.map((op) => (
          <option key={ op }>{op}</option>
        ))}
      </Form.Select>
      <Form.Control
        type="number"
        value={ value }
        name="value"
        className="m-3"
      />
      <Button
        type="submit"
        className="m-3 btn-warning btn-lg"
      >
        Filtrar
      </Button>
    </Form>
  );
}

export default FilterPlanets;
