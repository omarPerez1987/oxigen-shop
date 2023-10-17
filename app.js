import { initializeDropdown } from "./src/header/dropDown.js";
import { updateProgressBar } from "./src/scroller/scroller.js";
import { scrollToTop } from "./src/footer/buttonFooter/scrollToTop.js";
import { Slider } from "./src/slider/slider.js";
import { openModalIfNeeded } from "./src/modal/modal.js";
import { validateForm } from "./src/form/form.js";
import { getExchangeRates } from "./src/currency/currency.js";

document.addEventListener("DOMContentLoaded", function () {
  initializeDropdown(); // function dropdown en ./src/header

  updateProgressBar(); // function progreso barra horizontal en ./src/scroll

  scrollToTop(); //funcion scrollTop en ./src/footer/buttonFooter

  const slider = new Slider("slider"); // instancia para la clase Slider

  openModalIfNeeded(); //funcion muestra/oculta modal en ./src/modal

  validateForm(); //funcion de validación formulario ./src/form

  getExchangeRates();
});
