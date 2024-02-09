export function sendForm(data) {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          messageError("La solicitud no se pudo completar correctamente.")
        );
      }
      return response.json();
    })
    .then(() => {
      messageSuccess(`Datos enviados correctamente, gracias por registrarse`);
    })
    .catch((error) => {
      console.error("Error al enviar el formulario:", error);
    });
}


export const messageSuccess = (text) => {
  const message = document.createElement("div");
  message.innerHTML = `<p class='message success'>${text}</p>`;
  message.classList.add('message-container');
  document.body.appendChild(message);
  setTimeout(() => {
    document.body.removeChild(message);
  }, 3500);
};

export const messageError = (text) => {
  const message = document.createElement("div");
  message.innerHTML = `<p class='message error'>${text}</p>`;
  message.classList.add('message-container');
  document.body.appendChild(message);
  setTimeout(() => {
    document.body.removeChild(message);
  }, 3500);
};