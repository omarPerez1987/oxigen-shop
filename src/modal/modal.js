import { updateProgressBar } from "../scroller/scroller.js";
import { isValidEmail } from "../form/form.js";
import { sendForm } from "../form/sendForm.js";

const modal = document.getElementById("modal-container");
const cross = document.getElementById("cross");
const inputSub = document.getElementById("inputSub");
const formModal = document.getElementById("formModal");

function markModalAsShown() {
  localStorage.setItem("modalShown", "true");
}

function hasModalBeenShown() {
  return localStorage.getItem("modalShown") === "true";
}

export function openModalIfNeeded() {
  hasModalBeenShown();
  if (!hasModalBeenShown()) {
    showModal();
  }
}

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
      clearTimeout(timeoutModal);
    } else {
      window.removeEventListener("scroll", showModalByScroll);
    }
  });
}

function showModalByTime() {
  timeoutModal = setTimeout(() => {
    modal.style.display = "flex";
  }, 5000);
}

function noneModal() {
  modal.style.display = "none";
}

function closeModalByCross() {
  cross.addEventListener("click", () => {
    noneModal();
    markModalAsShown();
  });
}

function closeModalByClickOutside() {
  document.addEventListener("click", (event) => {
    if (!modal.contains(event.target)) {
      noneModal();
      markModalAsShown();
    }
  });
}

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
