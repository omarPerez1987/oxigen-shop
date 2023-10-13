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
        throw new Error("❌ La solicitud no se pudo completar correctamente.");
      }
      return response.json();
    })
    .then(() => {
      alert(`✅ Datos enviados correctamente, gracias por registrarse`);
    })
    .catch((error) => {
      console.error("Error al enviar el formulario:", error);
    });
}
