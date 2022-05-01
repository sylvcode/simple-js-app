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

function searchPokemon() {
  // Declare variables
  let input, filter, i, ul;
  // User Input
  input = document.getElementById("myInput");
  // Filter, makes search not case sensitive
  filter = input.value.toUpperCase();
  // Grabs the parent element by id
  ul = document.getElementById("list-group");

  // Treats lists items like an array, where each item can be accessed through      it's index
  for (i = 0; i < li.length; i++) {
    item = li[i];
    // Iterate over each list item to see if the value of the input, ignoring         case, matches the inner text or inner html of the item.
    txtValue = item.textContent || item.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      // Displays list items that are a match, and nothing if no match
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
