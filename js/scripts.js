// Click event to the button
function addClickEvent(button, pokeObjects) {
  button.addEventListener("click", (event) => {
    // TODO
  });
}

function addListItem(pokemonObject) {
  //variables
  let pokemonList = document.querySelector(".pokemon-list");

  let listItem = document.createElement("li");
  //setting innerText to be the Pokémon's name (forEach returns a Pokémon in each iteration).
  let button = document.createElement("button");
  // adding features and format to buttons
  button.innerText = pokemonObject.name;
  button.classList.add("pokemon-button");
  // Changing DOM hierarchy
  listItem.appendChild(button);
  pokemonList.appendChild(listItem);
  // adding event listener
  addClickEvent(button, pokemonObject);
}

//Created pokemonRepo variable to hold what my IIFE will return
let pokemonRepository = (function () {
  // the original array list including nested objects
  let pokemonList = [];

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

  // getAll Function returning PokemonList
  function getAll() {
    return pokemonList;
  }

  //IIFE returning
  return {
    getAll: getAll,
    add: add,
  };
})();

async function loadList() {
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=5";
  return fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      json.results.forEach(function (item) {
        // console.log(item);
        let pokemon = {
          name: item.name,
          detailsUrl: item.url,
        };
        pokemonRepository.add(pokemon);
      });
    })
    .catch(function (e) {
      console.error(e);
    });
}

async function loadDetails(pokemon) {
  // console.log(pokemon);
  try {
    const response = await fetch(pokemon.detailsUrl);
    const details = await response.json();
    // console.log(details);
    pokemon.imgUrl = details.sprites.front_shiny;
    pokemon.height = details.height;
    // console.log(pokemon);
    pokemonRepository.add(pokemon);
  } catch (e) {
    console.error(e);
  }
}

// Loading Data
loadList().then(function () {
  // forEach() Loop / what HTML will display
  pokemonRepository.getAll().forEach(function (item) {
    loadDetails(item).then(() => {
      let allPokemons = pokemonRepository.getAll();
      console.log(allPokemons);
    });
    addListItem(item);
  });
});

// pokemonRepository.loadList().then(pokemonRepository.loadDetails);
