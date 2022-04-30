let modalTitle = document.querySelector("#pokemonModalLabel");
let modalBody = document.querySelector(".modal-body");

//Global function
function editModalContent(pokemon) {
  modalTitle.innerText = pokemon.name;
  modalBody.innerHTML = `<p>${pokemon.height}</p> <p>${pokemon.weight}</p> <p>${pokemon.type}</p>`;
}
//creates button for pokemon
function addListItem(pokemon) {
  let pokemonList = document.querySelector(".list-group");
  let listPokemon = document.createElement("li");
  listPokemon.classList.add("list-group-item");
  let button = document.createElement("button");
  ///calling the global function
  button.addEventListener("click", () => editModalContent(pokemon));
  button.innerText = pokemon.name;
  button.classList.add("btn", "btn-primary", "pokemon-button");
  // Changing DOM hierarchy
  button.setAttribute("data-toggle", "modal");
  button.setAttribute("data-target", "#pokemonModal");
  listPokemon.appendChild(button);
  pokemonList.appendChild(listPokemon);
}
