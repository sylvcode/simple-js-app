let modalTitle = document.querySelector("#pokemonModalLabel");
let modalBody = document.querySelector(".modal-body");

//Global function
function editModalContent(pokemon) {
  modalTitle.innerText = pokemon.name;
  modalBody.innerHTML = `<p>🧨 Height: ${pokemon.height} m</p> 
  <p>💣 Weight: ${pokemon.weight} kg</p>
   <p>🔋 Type: ${pokemon.type}</p>
   <img src=${pokemon.imageUrl} alt="${pokemon.name}" />
   <img src=${pokemon.imgUrl} alt=${pokemon.name} />`;
}

//creates button for pokemon
function addListItem(pokemon) {
  let pokemonList = document.querySelector(".list-group");

  let listPokemon = document.createElement("li");
  listPokemon.classList.add(
    "group-list-item",
    "col-lg-4",
    "col-sm-12",
    "col-md-6"
  );
  let button = document.createElement("button");

  ///calling the global function
  button.addEventListener("click", () => editModalContent(pokemon));
  button.innerText = pokemon.name;
  button.classList.add("btn", "btn-danger", "pokemon-button");
  // Changing DOM hierarchy
  button.setAttribute("data-toggle", "modal");
  button.setAttribute("data-target", "#pokemonModal");
  listPokemon.appendChild(button);
  pokemonList.appendChild(listPokemon);
}
