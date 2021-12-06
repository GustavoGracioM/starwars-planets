async function fetchPlanets() {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const infoPlanets = await response.json();
  return infoPlanets.results;
}

export default fetchPlanets;
