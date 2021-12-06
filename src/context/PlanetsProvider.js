import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [titleTable, setTitleTable] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [isFilter, setIsFilter] = useState(false);
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
