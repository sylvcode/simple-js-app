let modalContainer = document.querySelector("#modal-container");

//  eventListener to window for keyboard input esc
window.addEventListener("keydown", (e) => {
  console.log(`${e.key} was pressed`);
  if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
    hideModal();
  }
});

function hideModal() {
  modalContainer.classList.remove("is-visible");
}

//Enable specifying a title and content for the showModal function:
function showModal(pokemonObj) {
  modalContainer.innerHTML = "";

  let modal = document.createElement("div");
  modal.classList.add("modal");

  let closeButtonElement = document.createElement("button");
  closeButtonElement.classList.add("modal-close");
  closeButtonElement.innerText = "close";
  closeButtonElement.addEventListener("click", hideModal);

  let titleElement = document.createElement("h1");
  titleElement.innerText = pokemonObj.name;

  let heightElement = document.createElement("p");
  heightElement.innerText = "height: " + pokemonObj.height;

  let weightElement = document.createElement("p");
  weightElement.innerText = "weight: " + pokemonObj.weight;

  let imgElement = document.createElement("img");
  imgElement.src = pokemonObj.imageUrl;
  imgElement.alt = pokemonObj.name;
  

  modal.appendChild(closeButtonElement);
  // modal.appendChild(imageElement);
  modal.appendChild(titleElement);
  modal.appendChild(heightElement);
  modal.appendChild(weightElement);
  modal.appendChild(imgElement);
  //  modal.appendChild(typeElement);
  modalContainer.appendChild(modal);
  //  finally adds .is-visible class to modal container to appear
  modalContainer.classList.add("is-visible");
}

modalContainer.addEventListener("click", (e) => {
  console.log(e, "was clicked");
  // Since this is also triggered when clicking INSIDE the modal
  // We only want to close if the user clicks directly on the overlay
  let target = e.target;
  console.log(target);
  console.log(modalContainer);
  if (target === modalContainer) {
   hideModal();
  }
  
});

//creates button for pokemon
function addListItem(pokemon) {
  let pokemonList = document.querySelector(".pokemon-list");
  let listPokemon = document.createElement("li");
  //setting innerText to be the Pokémon's name (forEach returns a Pokémon in each iteration).
  let button = document.createElement("button");
  // adding features and format to buttons
  button.innerText = pokemon.name;
  button.classList.add("pokemon-button");
  // Changing DOM hierarchy
  listPokemon.appendChild(button);
  pokemonList.appendChild(listPokemon);

  button.addEventListener("click", (_) => {
    showModal(pokemon);
  });
}
