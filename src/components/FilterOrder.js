import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
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
    <Form
      onChange={ handleChange }
      onSubmit={ handleSumbit }
      className="d-flex align-items-center"
    >
      <div className="m-3">
        <Form.Label htmlFor="ASC" className="d-flex me-3">
          <Form.Check
            id="ASC"
            type="radio"
            name="sort"
            value="ASC"
            className="me-2"
          />
          Ascendente
        </Form.Label>
        <Form.Label htmlFor="DESC" className="d-flex">
          <Form.Check
            id="DESC"
            type="radio"
            name="sort"
            value="DESC"
            className="me-2"
          />
          Descendente
        </Form.Label>
      </div>
      <Form.Select name="column" className="m-3">
        {filter.map((x) => (
          <option key={ x } value={ x }>{x}</option>
        ))}
      </Form.Select>
      <Button
        type="submit"
        className="btn-warning btn-lg"
      >
        Ordenar
      </Button>
    </Form>
  );
}

export default FilterOrder;
