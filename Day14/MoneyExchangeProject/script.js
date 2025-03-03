const apiKey = "e680d68e356bf27f950de329";
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

window.onload = function () {
  const fromCurrency = document.getElementById("fromCurrency");
  const toCurrency = document.getElementById("toCurrency");
  const amountInput = document.getElementById("amount");
  const resultText = document.getElementById("result");
  const convertBtn = document.getElementById("convertBtn");

  if (
    !fromCurrency ||
    !toCurrency ||
    !amountInput ||
    !convertBtn ||
    !resultText
  ) {
    console.error("One or more elements are missing!");
    if (!fromCurrency) console.error("Missing: #fromCurrency");
    if (!toCurrency) console.error("Missing: #toCurrency");
    if (!amountInput) console.error("Missing: #amount");
    if (!convertBtn) console.error("Missing: #convertBtn");
    if (!resultText) console.error("Missing: #result");
    return;
  }

  async function fetchCurrencies() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const currencies = Object.keys(data.conversion_rates);

      currencies.forEach((currency) => {
        fromCurrency.innerHTML += `<option value="${currency}">${currency}</option>`;
        toCurrency.innerHTML += `<option value="${currency}">${currency}</option>`;
      });

      fromCurrency.value = "USD";
      toCurrency.value = "EUR";
    } catch (error) {
      console.error("Error fetching currencies:", error);
    }
  }

  async function convertCurrency() {
    const amount = parseFloat(amountInput.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if (isNaN(amount) || amount <= 0) {
      resultText.innerText = "Enter a valid amount!";
      return;
    }

    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from}`
      );
      const data = await response.json();
      const rate = data.conversion_rates[to];
      const convertedAmount = (amount * rate).toFixed(2);
      resultText.innerText = `${amount} ${from} = ${convertedAmount} ${to}`;
    } catch (error) {
      console.error("Error converting currency:", error);
    }
  }

  convertBtn.addEventListener("click", convertCurrency);
  fetchCurrencies();
};
