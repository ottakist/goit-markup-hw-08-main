
(() => {
    const ref = {
      openModalBtn: document.querySelector("[data-menu-open]"),
      closeModalBtn: document.querySelector("[data-menu-close]"),
      modal: document.querySelector("[data-menu]"),
    };
  
    ref.openModalBtn.addEventListener("click", toggleModal);
    ref.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      ref.modal.classList.toggle("aria-expanded");

    }
  })();