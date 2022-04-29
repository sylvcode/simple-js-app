const pokemonRepository = (function () {
  let pokemonList = [];

  // getAll Function returning PokemonList
  function getAll() {
    return pokemonList;
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
    getAll: getAll,
    add: add,
  };
})();

async function fetchPokemons(limit = 10) {
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
  console.log(pokemon);
  try {
    const response = await fetch(pokemon.url);
    const item = await response.json();

    pokemon.imageUrl = item.sprites.front_shiny;
    pokemon.height = item.height;
    pokemon.weight = item.weight;

    pokemonRepository.add(pokemon);
    return pokemon;
  } catch (e) {
    console.error(e);
  }
}
