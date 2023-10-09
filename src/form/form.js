// Obtén una referencia al formulario y a los campos de entrada
const myForm = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const checkBox = document.getElementById("check");
const emailInput = document.getElementById("email");
const paragraph = document.getElementById("paragraph");

function isValidName() {
  if (nameInput.value.length >= 2 && nameInput.value.length <= 100) {
    nameInput.style.borderColor = "";
    return true;
  } else {
    nameInput.style.borderColor = "red";
    return false;
  }
}

function isValidEmail() {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailRegex.test(emailInput.value)) {
    emailInput.style.borderColor = "";
    return true;
  } else {
    emailInput.style.borderColor = "red";
    return false;
  }
}

function isValidCheck() {
  if (checkBox.checked) {
    paragraph.style.color = "";
    return true;
  } else {
    paragraph.style.color = "red";
    return false;
  }
}

// Función para validar el formulario
export function validateForm() {
  if (isValidName() && isValidEmail() && isValidCheck()) {
    return true;
  } else {
    return false;
  }
}

// Manejo del envío del formulario
myForm.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log(validateForm());
  if (validateForm()) {
    alert("El formulario se ha enviado correctamente.");
    myForm.reset();
  } else {
    alert("Por favor, complete el formulario correctamente.");
  }
});
