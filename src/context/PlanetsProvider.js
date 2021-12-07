import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [titleTable, setTitleTable] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [isFilter, setIsFilter] = useState(false);
  const [sortColumn, setSortColumn] = useState({});
  const [order, setOrder] = useState({ sort: 'ASC', column: 'population' });
  const [columns, setColumns] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water']);
  const [filterByNumericValue, setFilterByNumericValue] = useState({
    column: 'population', comparison: 'maior que', value: 0,
  });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const contextValue = {
    planets,
    setPlanets,
    titleTable,
    setTitleTable,
    filterByName,
    setFilterByName,
    isFilter,
    setIsFilter,
    sortColumn,
    setSortColumn,
    order,
    setOrder,
    columns,
    setColumns,
    filterByNumericValue,
    setFilterByNumericValue,
    filterByNumericValues,
    setFilterByNumericValues,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
