const progressBar = document.querySelector(".progress__bar");

export function updateProgressBar() {
  const scrollTop = window.scrollY; 
  const docHeight = document.documentElement.scrollHeight; 
  const winHeight = window.innerHeight;
  const scrolled = (scrollTop / (docHeight - winHeight)) * 100;
  progressBar.style.width = scrolled + "%";
  return scrolled
}
window.addEventListener("scroll", updateProgressBar);

