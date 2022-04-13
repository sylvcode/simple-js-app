// modal function 



let modal = (function () {
 
    let modalContainer = document.querySelector("#modal-container");
    function showModal(title, text) {
    modalContainer.innerHTML = "";
    
    let modal = document.createElement('div');
    modal.classList.add('modal');

 // Button 
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'close';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = title;

    let contentElement = document.createElement('p');
    contentElement.innerText = text;

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(modal);

    modalContainer.classList.add('is-visible');
  }
  
  function hideModal() {
    mocalConatiner.classList.remove('is-visible');
  }
  
  function showDialog(title, text) {
      showModal(title, text);
      //defining modalContainer:
      let modalContainer = document.querySelector('#modal-container');
      // add a confirm and cancel button to the modal:
      let modal = modalContainer.querySelector('.modal');

      let confirmButton = document.createElement('button');
      confirmButton.classList.add('modal-confirm');
      confirmButton.innerText = 'Confirm';

      let cancelButton = document.createElement('button');
      cancelButton.innerText = 'Cancel';

      modal.appendChild(confirmButton);
      modal.appendChild(cancelButton);

      // User is supposed to be able to simply press Enter
      confirmButton.focus();

  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });
  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });
  // modal ends here
  // return statement:
  document.querySelector('#show-modal').addEventListener('click', () => {
    showModal('Modal title', 'This is the modal content!');
  });
})();

