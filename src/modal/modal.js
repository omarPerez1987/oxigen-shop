import { updateProgressBar } from "../scroller/scroller.js";

const modal = document.getElementById("modal-container");
const cross = document.getElementById("cross");
const subscribe = document.getElementById("subscribe");



export function showModal () {
    showModalByScroll()
    showModalByTime ()
}

function showModalByScroll() {
  window.addEventListener("scroll", () => {
    const scrolledValue = updateProgressBar();
    if (scrolledValue > 25) {
      modal.style.display = "flex";
    }
  });
}

function showModalByTime() {
  setTimeout(() => {
    modal.style.display = "flex";
  }, 5000);
}

