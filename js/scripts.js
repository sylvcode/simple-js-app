// Click event to the button
function addClickEvent(button, pokemonObject) {
  button.addEventListener("click", (event) => {
    pokemonRepository.showDetails(pokemonObject);
    // TODO
  });
}
//Created pokemonRepo variable to hold what my IIFE will return
let pokemonRepository = (function () {
  let pokemonList = [];
     let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=10";
    //  modalContainer
    let modalContainer = document.querySelector('#modal-container');

  // getAll Function returning PokemonList
  function getAll() {
    return pokemonList;
  }

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

  //creates button for pokemon 
function addListItem(pokemon) {
pokemonRepository.loadDetails(pokemon).then(function () {
  //variables
  let pokemonList = document.createElement("ul");
  let listPokemon = document.createElement("li");
  //setting innerText to be the Pokémon's name (forEach returns a Pokémon in each iteration).
  let button = document.createElement("button");
  // adding features and format to buttons
  button.innerText = pokemon.name;
  button.classList.add("pokemon-button");
  // Changing DOM hierarchy
  listPokemon.appendChild(button);
  pokemonList.appendChild(listPokemon);
  // adding event listener
  addClickEvent(button, pokemon);
})
}

  // Get details from Pokemon & returns object{}
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
    showModal(pokemon);
  });
}

  async function loadList() {
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
        add (pokemon);
       // pokemonRepository.add(pokemon);
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
    pokemon.imageUrl = details.sprites.front_shiny;
    pokemon.height = details.height;
    pokemon.weight = details.weight;
   // pokemon.types = details.types;
    //pokemonRepository.add(pokemon);
  } catch (e) {
    console.error(e);
  }
}

  //Enable specifying a title and content for the showModal function:
function showModal(title, text) {
    modalContainer.innerHTML = '';

   let modal = document.createElement('div');
    modal.classList.add('modal');

    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'close';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = title;

    let heightElement = document.createElement('p');
    heightElement.innerText = 'height: ' + text.height;

    let weightElement = document.createElement('p');
    weightElement.innerText = 'weight: ' + text.weight;

    modal.appendChild(closeButtonElement);
       // modal.appendChild(imageElement);
        modal.appendChild(titleElement);
        modal.appendChild(heightElement);
        modal.appendChild(weightElement);
      //  modal.appendChild(typeElement);
        modalContainer.appendChild(modal);
     //  finally adds .is-visible class to modal container to appear
     modalContainer.classList.add('is-visible');
  }

   let dialogPromiseReject; // This can be set later, by showDialog

   function hideModal() {
  let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
   if (dialogPromiseReject) {
        dialogPromiseReject();
      dialogPromiseReject = null;
    }
  }
  

    function showDialog(title, text) {
      showModal(title, text);
        // We want to add a confirm and cancel button to the modal
     // let modalContainer = document.querySelector('#modal-container');
      let modal = modalContainer.querySelector('.modal');

      let confirmButton = document.createElement('button');
      confirmButton.classList.add('modal-confirm');
      confirmButton.innerText = 'Confirm';

      let cancelButton = document.createElement('button');
      cancelButton.classList.add('modal-cancel');
      cancelButton.innerText = 'Cancel';
    
      modal.appendChild(confirmButton);
      modal.appendChild(cancelButton);
// We want to focus the confirmButton so that the user can simply press Enter
      confirmButton.focus();

      return new Promise((resolve, reject) => {
          cancelButton.addEventListener('click', hideModal); 
          confirmButton.addEventlistener('click', () => {
            dialogPromiseReject = null; //Reset this
            hideModal();
            resolve();
          });
  // This can be used to reject from other functions
  dialogPromiseReject = reject;
      });
    }

     //  eventListener to window for keyboard input esc
 window.addEventListener('keydown', (e) => {
   let modalContainer = document.querySelector('#modal-container');
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();  
    }
  });

     // eventListener when user clicks outside
  modalContainer.addEventListener('click', (e) => {
    // Since this is also triggered when clicking INSIDE the modal
    // We only want to close if the user clicks directly on the overlay
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

   //  eventListener so showModal function starts on click
  document.querySelector('#show-modal').addEventListener('click', () => {
    showModal('Modal title', 'This is the modal content!');
  });


   document.querySelector('#show-dialog').addEventListener('click', () => {
        showDialog('confirm action').then(function () {
            alert('confirmed');
        }, () => {
            alert('not confirmed');
        });
    });


   //IIFE returning
  return {
    getAll: getAll,
    add: add,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    addListItem: addListItem,
    showModal: showModal,
  };

})();

//pokemonRepository.loadList().then(function () {
  //pokemonRepository.getAll().forEach(function(pokemon) {
    //pokemonRepository.addListItem(pokemon);
  //});
//});

// Loading Data
pokemonRepository.loadList().then(function () {
  // forEach() Loop / what HTML will display
  pokemonRepository.getAll().forEach(function (item) {
    pokemonRepository.loadDetails(item).then(() => {
      let allPokemons = pokemonRepository.getAll();
      console.log(allPokemons);
    });
    pokemonRepository.addListItem(item);
  });
});


 //pokemonRepository.loadList().then(pokemonRepository.loadDetails);
