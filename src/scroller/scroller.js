const progressBar = document.querySelector(".progress-bar");

export function updateProgressBar() {
  const scrollTop = window.scrollY; //posición actual de desplazamiento vertical
  const docHeight = document.documentElement.scrollHeight; //altura total del documento HTML
  const winHeight = window.innerHeight; //altura de la ventana del navegador
  const scrolled = (scrollTop / (docHeight - winHeight)) * 100;
  progressBar.style.width = scrolled + "%";
  return scrolled
}
window.addEventListener("scroll", updateProgressBar);

