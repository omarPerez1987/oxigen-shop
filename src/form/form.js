import { sendForm } from "./sendForm.js";

const myForm = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const checkBox = document.getElementById("check");
const emailInput = document.getElementById("email");
const paragraph = document.getElementById("paragraph");

function isValidName() {
  return nameInput.value.length >= 2 && nameInput.value.length <= 100;
}

export function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}

function isValidCheck() {
  return checkBox.checked;
}

function printForm() {
  isValidName()
    ? (nameInput.style.border = "")
    : (nameInput.style.border = "1px solid red");
  isValidEmail()
    ? (emailInput.style.border = "")
    : (emailInput.style.border = "1px solid red");
  isValidCheck()
    ? (paragraph.style.color = "")
    : (paragraph.style.color = "red");
}

// Función para validar el formulario
export function validateForm() {
  return isValidName() && isValidEmail(emailInput.value) && isValidCheck();
}


myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  
  const dataForm = {
    name: nameInput.value,
    email: emailInput.value,
  };

  if (validateForm()) {
    sendForm(dataForm);
  } else {
    printForm();
    alert("Por favor, complete el formulario correctamente.");
  }
});
