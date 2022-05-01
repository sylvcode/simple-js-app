const pokemonRepository = (function () {
  let pokemonList = [];

  // getAll Function returning PokemonList
  function getAll() {
    return pokemonList;
  }
  // function input
  function getByName(pokemonName) {
    // inline function
    let found = pokemonList.find((pokemon) => pokemon.name === pokemonName);
    return found;
  }

  // pokemonRepository add Function only if pokemon is an Object
  function add(pokemon) {
    if (typeof pokemon === "object" && pokemon.name) {
      for (let i = 0; i <= pokemonList.length; i++) {
        if (pokemonList[i] && pokemonList[i].name === pokemon.name) {
          // if pokemon exists, update to new pokemon
          pokemonList[i] = pokemon;
          return;
        }
      }
      // new pokemon
      pokemonList.push(pokemon);
    }
  }

  //IIFE returning
  return {
    getByName: getByName,
    getAll: getAll,
    add: add,
  };
})();

async function fetchPokemons(limit = 50) {
  // let pokemons = [];
  let apiUrl = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}`;
  return fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      return json.results;
    })
    .catch(function (e) {
      console.error(e);
    });
}

async function loadDetails(pokemon) {
  try {
    const response = await fetch(pokemon.url);
    const item = await response.json();

    pokemon.imageUrl = item.sprites.front_shiny;
    pokemon.imgUrl = item.sprites.back_shiny;
    pokemon.height = item.height;
    pokemon.weight = item.weight;
    pokemon.type = item.types[0].type.name;
    console.log(item.types);
    pokemonRepository.add(pokemon);
    return pokemon;
  } catch (e) {
    console.error(e);
  }
}
