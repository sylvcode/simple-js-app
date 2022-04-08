// wrapping array in IIFE to avoid accidentally accessing the global state.

//created pokemonRepo variable to hold what my IIFE will return
let pokemonRepository = (function () {
  // the original array list including nested objects
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=120";

  // getAll Function returning PokemonList
  function getAll() {
    return pokemonList;
  }

  // pokemonRepository add Function only if pokemon is an Object
  function add(pokemon) {
    if (typeof pokemon === "object") {
      if (pokemon.name && pokemon.height && Array.isArray(pokemon.types)) {
        pokemonList.push(pokemon);
        return;
      }
      console.log("pokemon not right object type");
    }
  }

  //This function has one parameter—it will represent a single Pokémon.
  function addListItem(pokemon) {
    //variables
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    //setting innerText to be the Pokémon's name (forEach returns a Pokémon in each iteration).
    let button = document.createElement("button");
    // adding features and format to buttons
    button.innerText = pokemon.name;
    button.classList.add("pokemon-button");
    // Changing DOM hierarchy
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    // adding event listener
    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  }

  // Fetching Pokemon data
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.Url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (details) {

    }

  }

  // js function that will show the objects inside the array
  function showDetails(pokemon) {
    console.log(pokemon);
  }

  //IIFE returning
  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
  };
})();

// Loading Data
pokemonRepository.loadList().then(function () {
  // forEach() Loop / what HTML will display
  pokemonRepository.getAll().forEach(function (pokemon) {
    //outside the IIFE
    pokemonRepository.addListItem(pokemon);
  });
});
