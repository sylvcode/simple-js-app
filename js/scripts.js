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
// Loop that iterates over each item in pokemonList
for (let i = 0; i < pokemonList.length; i++) {
  document.write(
    " Name: " + pokemonList[i].name + " (Height: " + pokemonList[i].height + "."
  );
  document.write(" Types: " + pokemonList[i].types[0]);

  //if more than one type, display it
  for (let t = 1; t < pokemonList[i]["types"].length; t++)
    document.write(", " + pokemonList[i].types[t]);

  //Conditional checks if the height is above a certain value.

  if (pokemonList[i].height > 1.7) {
    document.write("<h4> - Wow that's big!</h4>");
  }
}
