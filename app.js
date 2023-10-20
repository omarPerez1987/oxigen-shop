import { initializeDropdown } from "./src/header/dropDown.js";
import { updateProgressBar } from "./src/scroller/scroller.js";
import { scrollToTop } from "./src/footer/buttonFooter/scrollToTop.js";
import { Slider } from "./src/slider/slider.js";
import { openModalIfNeeded } from "./src/modal/modal.js";
import { validateForm } from "./src/form/form.js";
import { getExchangeRates } from "./src/currency/currency.js";

document.addEventListener("DOMContentLoaded", function () {
  initializeDropdown();

  updateProgressBar();

  scrollToTop();

  const slider = new Slider("slider");

  openModalIfNeeded();

  validateForm();

  getExchangeRates();
});
