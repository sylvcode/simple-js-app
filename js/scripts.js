// wrapping array in IIFE to avoid accidentally accessing the global state.

//created pokemonRepo variable to hold what my IIFE will return
let pokemonRepository = (function () {
  // the original array list including nested objects
  let modalContainer = document.querySelector("#modalContainer");
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=120";

  // pokemonRepository add Function only if pokemon is an Object
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      pokemon.name &&
      "detailsUrl" &&
      Array.isArray(pokemon.types)
    ) {
      pokemonList.push(pokemon);
    } else {
      document.write("pokemon not right object type");
    }
  }

  // getAll Function returning PokemonList
  function getAll() {
    return pokemonList;
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
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
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  // js function that will show the objects inside the array

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }
  function showModal(item) {
    modalContainer.innerHTML = "";
    let modal = document.createElement("div");
    modal.classList.add("modal");
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
