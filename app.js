import { initializeDropdown } from "./src/header/dropDown.js";
import { handleResize } from "./src/header/dropDown.js";
import { updateProgressBar } from "./src/scroller/scroller.js";
import { scrollToTop } from "./src/footer/buttonFooter/scrollToTop.js";
import { Slider } from "./src/slider/slider.js"

document.addEventListener("DOMContentLoaded", function () {

  initializeDropdown(); // function dropdown en ./src/header
  handleResize(); // function read with desktop en ./src/header

  updateProgressBar(); // function progreso barra horizontal en ./src/scroll

  scrollToTop(); //funcion scrollTop en ./src/footer/buttonFooter

  const slider = new Slider('slider'); // instancia para la clase Slider
});
