const BASE_URL = "https://pokeapi.co/api/v2";
// console.clear shorthand
const clear = () => {
  console.clear();
};

/*
    Esta función retorna la cantidad de pokemones que existen de un tipo en específico.
*/
const getPokemonsCountByType = async (type) => {
  clear();
  if (typeof type !== "string" || type === "" || type === undefined) {
    throw new Error("type must be a string");
  }
  try {
    const response = await fetch(`${BASE_URL}/type/${type}`);
    const data = await response.json();
    return data.pokemon.length;
  } catch (e) {
    console.error(e);
  }
};

/* 
    Esta función retorna todos los pokemons dado dos tipos.
*/

const getAllPokemonsByTypes = async (type1, type2) => {
  clear();
  if (typeof type1 !== "string" || type1 === "" || type1 === undefined) {
    throw new Error("type1 must be a string");
  }
  if (typeof type2 !== "string" || type2 === "" || type2 === undefined) {
    throw new Error("type2 must be a string");
  }
  try {
    const response = await fetch(`${BASE_URL}/type/${type1}`);
    const data = await response.json();
    const response2 = await fetch(`${BASE_URL}/type/${type2}`);
    const data2 = await response2.json();
    return data.pokemon.concat(data2.pokemon);
  } catch (e) {
    console.error(e);
  }
};

/*
    Esta función retorna el nombre de un pokemon dado su id.
 */

const getPokemonNameById = async (id) => {
  clear();
  if (typeof id !== "number" || id === "" || id === undefined) {
    throw new Error("id must be a number");
  }
  try {
    const response = await fetch(`${BASE_URL}/pokemon/${id}`);
    const data = await response.json();
    return data.name;
  } catch (e) {
    console.error(e);
  }
};
/* 
    Esta función retorna las estadísticas base de un pokemon dado su id.
*/
const getBaseStatsById = async (id) => {
  clear();
  if (typeof id !== "number" || id === "" || id === undefined) {
    throw new Error("id must be a number");
  }
  try {
    const response = await fetch(`${BASE_URL}/pokemon/${id}`);
    const data = await response.json();
    return data.stats;
  } catch (e) {
    console.error(e);
  }
};
/*
    Esta función retorna los pokemons especificados en un array de ids de manera ordenada.
*/
const sortPokemons = async (pokemons, sortFunction) => {
  clear();
  if (!Array.isArray(pokemons)) {
    throw new Error("pokemons must be an array");
  }
  if (typeof sortFunction !== "function") {
    throw new Error("sortFunction must be a function");
  }

  const pokeArr = [];
  for (let i = 0; i < pokemons.length; i++) {
    const response = await fetch(`${BASE_URL}/pokemon/${pokemons[i]}`);
    const data = await response.json();
    pokeArr.push(data);
  }
  return pokeArr.sort(sortFunction);
};

/* 
    Esta función retorna true si un pokemon dado su id es del tipo especificado.
*/
const checkPokemonType = async (id, type) => {
  clear();
  if (typeof id !== "number" || id === "" || id === undefined) {
    throw new Error("id must be a number");
  }
  if (typeof type !== "string" || type === "" || type === undefined) {
    throw new Error("type must be a string");
  }
  try {
    const response = await fetch(`${BASE_URL}/pokemon/${id}`);
    const data = await response.json();
    // Como data.types es un array de objetos, se debe iterar sobre cada uno de ellos para obtener el nombre del tipo.
    return data.types.some((t) => t.type.name === type);
  } catch (e) {
    console.error(e);
  }
};

