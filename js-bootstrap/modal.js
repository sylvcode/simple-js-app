let modalContent = document.querySelector("#modal-content");

//  eventListener to window for keyboard input esc
window.addEventListener("keydown", (e) => {
  console.log(`${e.key} was pressed`);
  if (e.key === "Escape" && modalContent.classList.contains("is-visible")) {
    hideModal();
  }
});

function hideModal() {
  modalContent.classList.remove("is-visible");
}

//Enable specifying a title and content for the showModal function:
function showModal(pokemonObj) {
  modalContent.innerHTML = "";

  let modal = document.createElement("div");
  modal.classList.add("modal");

  let closeButtonElement = document.createElement("button");
  closeButtonElement.classList.add("modal-close");
  closeButtonElement.innerText = "close";
  closeButtonElement.addEventListener("click", hideModal);

  let titleElement = document.querySelector("#pokemonModalLabel");
  titleElement.innerText = pokemonObj.name;

  let heightElement = document.createElement("p");
  heightElement.innerText = "height: " + pokemonObj.height;

  let weightElement = document.createElement("p");
  weightElement.innerText = "weight: " + pokemonObj.weight;
  let pokemonImg = document.createElement("img");
  pokemonImg.src = pokemonObj.imageUrl;

  modal.appendChild(closeButtonElement);
  modal.appendChild(titleElement);
  modal.appendChild(heightElement);
  modal.appendChild(weightElement);
  modal.appendChild(pokemonImg);
  modalContent.appendChild(modal);
  modalContent.classList.add("is-visible");
}

modalContent.addEventListener("click", (e) => {
  // Since this is also triggered when clicking INSIDE the modal
  // We only want to close if the user clicks directly on the overlay
  let target = e.target;
  if (target === modalContent) {
    hideModal();
  }
});

//creates button for pokemon
function addListItem(pokemon) {
  let pokemonList = document.querySelector(".list-group");
  let listPokemon = document.createElement("li");
  listPokemon.classList.add("list-group-item");
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("btn", "btn-primary", "pokemon-button");
  // Changing DOM hierarchy
  button.setAttribute("data-toggle", "modal");
  button.setAttribute("data-target", "#pokemonModal");
  listPokemon.appendChild(button);
  pokemonList.appendChild(listPokemon);
}
