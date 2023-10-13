const selectCurrency = document.getElementById("select-currency");
const elements = document.querySelectorAll(".price");

export function getExchangeRates(selectedCurrency) {
  const apiUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const exchangeRates = data.eur;
      const selectedRate = exchangeRates[selectedCurrency];

      elements.forEach(function (item) {
        const dataValue = parseFloat(item.dataset.value); //convertir de string a flotante

        if (selectedRate !== undefined) { //al cargar el dom selectedRate es undefined
          const converted = dataValue * selectedRate;
          const fixed = converted.toFixed(0);
          if (selectedCurrency === "eur") {
            item.textContent = `€${fixed}`;
          }
          if (selectedCurrency === "usd") {
            item.textContent = `$${fixed}`;
          }
          if (selectedCurrency === "gbp") {
            item.textContent = `£${fixed}`;
          }
        }
      });
    })
    .catch((error) => {
      console.error("Error al obtener los tipos de cambio:", error);
    });
}

//escucha el cambio del selector y llamara nuevamente la función
selectCurrency.addEventListener("change", () => {
  const selectedCurrency = selectCurrency.value;
  getExchangeRates(selectedCurrency);
});
