import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [titleTable, setTitleTable] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const contextValue = {
    planets,
    setPlanets,
    titleTable,
    setTitleTable,
    filterByName,
    setFilterByName,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.arrayOf().isRequired,
};

export default PlanetsProvider;
