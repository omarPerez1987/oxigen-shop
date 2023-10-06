import { initializeDropdown } from "./src/header/dropDown.js";
import { updateProgressBar } from "./src/scroller/scroller.js";
import { scrollToTop } from "./src/footer/buttonFooter/scrollToTop.js";

document.addEventListener("DOMContentLoaded", function () {

  initializeDropdown(); // function dropdown en ./src/header

  updateProgressBar(); // function progreso barra horizontal en ./src/scroll

  scrollToTop(); //funcion scrollTop en ./src/footer/buttonFooter
});
