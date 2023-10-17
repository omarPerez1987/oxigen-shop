import { updateProgressBar } from "../scroller/scroller.js";
import { isValidEmail } from "../form/form.js";
import { sendForm } from "../form/sendForm.js";

const modal = document.getElementById("modal-container");
const cross = document.getElementById("cross");
const inputSub = document.getElementById("inputSub");
const formModal = document.getElementById("formModal");

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
  }
}

// SHOW MODAL******************************************************

function showModal() {
  showModalByScroll();
  showModalByTime();
}

let timeoutModal;

function showModalByScroll() {
  window.addEventListener("scroll", () => {
    const scrolledValue = updateProgressBar(); // aprovecho la lectura updateProgressBar
    if (!hasModalBeenShown() && scrolledValue > 25) {
      modal.style.display = "flex";
      clearTimeout(timeoutModal); // remuevo el setTimeout de showmodalByTime
    } else {
      window.removeEventListener("scroll", showModalByScroll); //remueve el evento de escucha
    }
  });
}

function showModalByTime() {
  timeoutModal = setTimeout(() => {
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

// Validación y envío del formulario en el modal
formModal.addEventListener("submit", function (e) {
  e.preventDefault();
  validateEmailModal();
});

function validateEmailModal() {
  if (isValidEmail(inputSub.value)) {
    const dataEmail = { email: inputSub.value };
    sendForm(dataEmail);
    noneModal();
    markModalAsShown();
  } else {
    alert("Por favor, escriba un correo electrónico válido.");
    formModal.reset();
  }
}
