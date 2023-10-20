const showBtn = document.getElementById("showBtn");
const hideBtn = document.getElementById("hideBtn");
const dropdownList = document.getElementById("dropdownList");
const noList = document.getElementById("noList");


export function initializeDropdown() {
  
  hideBtn.addEventListener("click", function () {
    dropdownList.style.display = "none";
    noList.style.display = "block";
  });
  
  showBtn.addEventListener("click", function () {
    dropdownList.style.display = "block";
    noList.style.display = "none";
  });
}

// solucion al bug al cambiar de pantalla con devtools
export function handleResize() {
  if (window.innerWidth >= 670) {
    dropdownList.style.display = "flex";
    noList.style.display = "none";
  } else {
    dropdownList.style.display = "none";
    noList.style.display = "block";  
  }
}
handleResize();
window.addEventListener("resize", handleResize);
