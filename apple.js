const applePrice = document.querySelector("#apple-price");
const appleNumber = document.getElementById("apple-number");
const btnCalculate = document.getElementById("calculate-apple-price");
const applePriceTotal = document.getElementById("apple-price-total");
const totalApplePrice = document.getElementById("apple-price-result");

btnCalculate.addEventListener("click", () => {
  const price = parseInt(applePrice.value);
  const number = parseFloat(appleNumber.value);
  let totalPrice = price * number;
  applePriceTotal.textContent = "$ " + totalPrice;

  if (number > 2 && number <= 5) {
    totalPrice = totalPrice * 0.9;
  } else if (number > 5 && number <= 10) {
    totalPrice = totalPrice * 0.85;
  } else if (number > 10) {
    totalPrice = totalPrice * 0.8;
  }

  totalApplePrice.textContent = "$ " + totalPrice;
});
