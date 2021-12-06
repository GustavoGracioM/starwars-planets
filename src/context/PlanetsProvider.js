import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [titleTable, setTitleTable] = useState([]);
  const contextValue = {
    planets,
    setPlanets,
    titleTable,
    setTitleTable,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default PlanetsProvider;
