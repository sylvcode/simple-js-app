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

