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
    document.querySelector(".ul");
    let pokemonListCall = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    //setting innerText to be the Pokémon's name (forEach returns a Pokémon in each iteration).
    let button = document.createElement("button");
    addListItem.innerText = "pokemon.name";
    button.classList.add("pokemon-button");
    //append the button to the list item as its child.
    listItem.appendChild(button);
    //append the list item to the unordered list as its child.
    pokemonListCall.appendChild(listItem);
  }

  //IIFE returning getAll and add
  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
  };
})();

// test pokemonRepository add function discards none objects
pokemonRepository.add({ name: "sul", height: 8, types: ["bla"] });

// forEach() Loop / what HTML will display
pokemonRepository.getAll().forEach(function (pokemon) {
  //outside the IIFE
  pokemonRepository.addListItem(pokemon);
  /*document.querySelector(".ul");
  let pokemonListCall = document.querySelector(".pokemon-list");
  let listItem = document.createElement("li");
  //setting innerText to be the Pokémon's name (forEach returns a Pokémon in each iteration).
  let button = document.createElement("button");
  button.innerText = "pokemon.name";
  button.classList.add("pokeomn-button");
  //append the button to the list item as its child.
  listItem.appendChild(button);
  //append the list item to the unordered list as its child.
  pokemonListCall.appendChild(listItem): 
  if (pokemon.height < 1.7) {
    /*  document.write(
      "<p> Name: " +
        pokemon.name +
        " (Height: " +
        pokemon.height +
        ". Types: " +
        pokemon.types +
        ".)</p>"
    ); 
  } else if (pokemon.height >= 1.7) {
     document.write(
    `<p>${pokemon.name} (Height: ${pokemon.height}. Types: ${pokemon.types} Wow, that's big!</p>`
     ); 
  } */
});

// Loop that iterates over each item in pokemonList
//for (let i = 0; i < pokemonList.length; i++) {
//document.write(
//  " Name: " + pokemonList[i].name + " (Height: " + pokemonList[i].height + "."
//);
// document.write(" Types: " + pokemonList[i].types[0]);

//Conditional checks if the height is above a certain value.

// if (pokemonList[i].height > 1.7) {
//   document.write("<h4> - Wow that's big!</h4>");
// }
//]
//}
