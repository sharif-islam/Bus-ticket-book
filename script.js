document
  .getElementById("firstClassPlusBtn")
  .addEventListener("click", function () {
    let val = document.getElementById("firstClassValue").value;
    val = parseInt(val) + 1;
    document.getElementById("firstClassValue").value = val;
    totalValue(val);
  });
document
  .getElementById("economyClassPlusBtn")
  .addEventListener("click", function () {
    let val = document.getElementById("economyClassValue").value;
    val = parseInt(val) + 1;
    document.getElementById("economyClassValue").value = val;
    totalValue(val);
  });

document
  .getElementById("firstClassMinusBtn")
  .addEventListener("click", function () {
    let val = document.getElementById("firstClassValue").value;
    if (parseInt(val) > 0) val = parseInt(val) - 1;
    document.getElementById("firstClassValue").value = val;
    totalValue(val);
  });

document
  .getElementById("economyClassMinusBtn")
  .addEventListener("click", function () {
    let val = document.getElementById("economyClassValue").value;
    if (parseInt(val) > 0) val = parseInt(val) - 1;
    document.getElementById("economyClassValue").value = val;
    totalValue(val);
  });

function totalValue(value) {
  let firstValue = parseFloat(document.getElementById("firstClassValue").value);
  let economyValue = parseFloat(
    document.getElementById("economyClassValue").value
  );
  let amount = firstValue * 150 + economyValue * 100;

  let tax = amount * 0.1;

  document.getElementById("totalCost").innerText = amount;
  document.getElementById("totalTax").innerText = tax;
  let totalAmount = amount + tax;
  document.getElementById("totalBalance").innerText = totalAmount;
}
document.getElementById("bookButton").addEventListener("click", function () {
  let firstValue = parseFloat(document.getElementById("firstClassValue").value);
  let economyValue = parseFloat(
    document.getElementById("economyClassValue").value
  );
  alert(
    "First Class Seat Book: " +
      firstValue +
      "  Economy Class Seat Book: " +
      economyValue
  );
});
