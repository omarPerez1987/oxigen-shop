import { updateProgressBar } from "../scroller/scroller.js";

const modal = document.getElementById("modal-container");
const cross = document.getElementById("cross");
const subscribe = document.getElementById("subscribe");

// LOCALSTORAGE************************************************

// Función para marcar el modal como mostrado
function markModalAsShown() {
  localStorage.setItem("modalShown", "true");
}

// Función para verificar si el modal ya se ha mostrado anteriormente
function hasModalBeenShown() {
  return localStorage.getItem("modalShown") === "true";
}

// Función para mostrar el modal si no se ha mostrado anteriormente
export function openModalIfNeeded() {
  hasModalBeenShown();

  if (!hasModalBeenShown()) {
    showModal();
    showModalByScroll();
  }
}


// SHOW MODAL******************************************************
function showModal() {
  showModalByScroll();
  showModalByTime();
}

function showModalByScroll() {
  window.addEventListener("scroll", () => {
    const scrolledValue = updateProgressBar();
    if (!hasModalBeenShown() && scrolledValue > 25) {
      modal.style.display = "flex";
    } else {
      window.removeEventListener("scroll", showModalByScroll); //remueve el evento de escucha
    }
  });
}

function showModalByTime() {
  setTimeout(() => {
    modal.style.display = "flex";
  }, 5000);
}

// EXIT MODAL**********************************************************

function noneModal() {
  modal.style.display = "none";
}

// exit modal click en cross
function closeModalByCross() {
  cross.addEventListener("click", () => {
    noneModal();
    markModalAsShown();
  });
}

// exit modal click fuera del modal
function closeModalByClickOutside() {
  document.addEventListener("click", (event) => {
    if (!modal.contains(event.target)) {
      noneModal();
      markModalAsShown();
    }
  });
}

// exit modal click escape
function closeModalByKeydowm() {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      noneModal();
      markModalAsShown();
    }
  });
}

function closeModal() {
  closeModalByCross();
  closeModalByClickOutside();
  closeModalByKeydowm();
}
closeModal();
