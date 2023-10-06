// dropdown.js

export function initializeDropdown() {
  const showBtn = document.getElementById("showBtn");
  const hideBtn = document.getElementById("hideBtn");
  const dropdownList = document.getElementById("dropdownList");
  const noList = document.getElementById("noList");

  showBtn.addEventListener("click", function () {
    dropdownList.style.display = "block";
    noList.style.display = "none";
  });

  hideBtn.addEventListener("click", function () {
    dropdownList.style.display = "none";
    noList.style.display = "block";
  });
}
