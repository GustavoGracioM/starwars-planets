import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import { titleTable } from '../services/informationTable';
import fetchPlanets from '../services/fecthPlanets';

function Table() {
  const {
    planets,
    setPlanets,
    filterByName,
    filterByNumericValues,
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

  useEffect(() => {
    fetchPlanets().then((response) => setPlanets(response));
  }, [setPlanets]);

  return (
    <table>
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
    </table>
  );
}

export default Table;
