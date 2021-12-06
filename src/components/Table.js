import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import fetchPlanets from '../services/fecthPlanets';
import titleTable from '../services/informationTable';

function Table() {
  const { planets, setPlanets, filterByName } = useContext(PlanetsContext);

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
