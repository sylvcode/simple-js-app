let modalTitle = document.querySelector("#pokemonModalLabel");
let modalBody = document.querySelector(".modal-body");

let modalImage = document.querySelector(".modal-image");
modalImage.attr("src", pokemon.imageUrl);

//Global function
function editModalContent(pokemon) {
  modalTitle.innerText = pokemon.name;
  modalBody.innerHTML = `<p>🧨 Height: ${pokemon.height} m</p> 
  <p>💣 Weight: ${pokemon.weight} kg</p>
   <p>🔋 Type: ${pokemon.type}</p>`;
  modalImage.innerText = `<img ${pokemon.imageUrl}/>`;
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
  button.classList.add("btn", "btn-danger", "pokemon-button");
  // Changing DOM hierarchy
  button.setAttribute("data-toggle", "modal");
  button.setAttribute("data-target", "#pokemonModal");
  listPokemon.appendChild(button);
  pokemonList.appendChild(listPokemon);
}
