// wrapping array in IIFE to avoid accidentally accessing the global state.
//created pokemonRepo variable to hold what my IIFE will return
let pokemonRepository = (function () {
  // the original array list including nested objects
  let pokemonList = [
    {
      name: "Bulbasure",
      height: 0.7,
      types: ["grass", "poison"],
    },
    {
      name: "Charizard",
      height: 1.7,
      types: ["monster", "dragon"],
    },
    {
      name: "Ivysaur",
      height: 1,
      types: ["monster", "grass"],
    },
    {
      name: "Venusaur",
      height: 2,
      types: ["monster", "grass"],
    },
    {
      name: "Wartortle",
      height: 1,
      types: ["monster", "water 1"],
    },
    {
      name: "Charmeleon",
      height: 1.1,
      types: ["monster", "dragon"],
    },
    {
      name: "Butterfree",
      height: 1.1,
      types: ["bug"],
    },
    {
      name: "Beedril",
      height: 1,
      types: ["bug"],
    },
    {
      name: "Pidgeotto",
      height: 1.1,
      types: ["flying"],
    },
  ];

  // getAll Function returning PokemonList
  function getAll() {
    return pokemonList;
  }

  //This function has one parameter—it will represent a single Pokémon.
  function addListItem(pokemon) {
    document.querySelector(".ul");
    //variables
    let pokemonList = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    //setting innerText to be the Pokémon's name (forEach returns a Pokémon in each iteration).
    let button = document.createElement("button");

    // adding features and format to buttons
    button.innerText = pokemon.name;
    button.classList.add("pokemon-button");

    // Changing DOM hierarchy
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);

    // adding event listener
    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  }
  // js function that will show the objects inside the array
  function showDetails(pokemon) {
    console.log(pokemon);
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

  //IIFE returning
  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    showDetails: showDetails,
  };
})();

// test pokemonRepository add function discards none objects
pokemonRepository.add({ name: "sul", height: 8, types: ["bla"] });

// forEach() Loop / what HTML will display
pokemonRepository.getAll().forEach(function (pokemon) {
  //outside the IIFE
  pokemonRepository.addListItem(pokemon);
});
