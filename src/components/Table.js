import React, { useContext, useEffect } from 'react';
import TableB from 'react-bootstrap/Table';
import PlanetsContext from '../context/PlanetsContext';
import { titleTable } from '../services/informationTable';
import fetchPlanets from '../services/fecthPlanets';

function Table() {
  const {
    planets,
    setPlanets,
    filterByName,
    filterByNumericValues,
    order,
  } = useContext(PlanetsContext);

  function validationFilter(planet) {
    const x = filterByNumericValues.every((t) => {
      if (t.comparison === 'maior que') return parseFloat(planet[t.column]) > t.value;
      if (t.comparison === 'menor que') return parseFloat(planet[t.column]) < t.value;
      if (t.comparison === 'igual a') {
        return parseFloat(t.value) === parseFloat(planet[t.column]);
      }
      return false;
    });
    return x;
  }

  function orderFilter(a, b) {
    if (order.sort === 'ASC') return a[order.column] - b[order.column];
    if (order.sort === 'DESC') return b[order.column] - a[order.column];
  }

  useEffect(() => {
    fetchPlanets().then((response) => setPlanets(response));
  }, [setPlanets]);

  return (
    <TableB variant="dark" responsive>
      <thead>
        <tr>
          {
            titleTable.map((title) => (
              <th key={ title }>{title}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          planets
            .sort(orderFilter)
            .filter((planet) => (filterByName
              ? planet.name.includes(filterByName)
              : true))
            .filter((planet) => (
              filterByNumericValues.length > 0
                ? validationFilter(planet)
                : true
            ))
            .map((planet) => (
              <tr key={ planet.name }>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.residents}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))
        }
      </tbody>
    </TableB>
  );
}

export default Table;
