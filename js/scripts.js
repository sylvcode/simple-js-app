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

// forEach() Loops
pokemonList.forEach(function (pokemon) {
  document.write(
    " Name: " +
      pokemon.name +
      " Height: " +
      pokemon.height +
      " Types: " +
      pokemon.types
  );
});
