const inputValue = document.getElementById("input-value");

const lengthConversion = document.getElementById("converted-length");
const volumeConversion = document.getElementById("converted-volume");
const massConversion = document.getElementById("converted-mass");

const conversionBtn = document.getElementById("convert-btn");

conversionBtn.addEventListener("click", function convertUnit() {
  lengthConversion.innerText = `${inputValue.value} meters = ${
    inputValue.value * 3.281
  } feet | ${(inputValue.value * 0.3048).toFixed(3)} feet =${(
    inputValue.value * 0.3048
  ).toFixed(3)} meters`;

  volumeConversion.innerText = `${inputValue.value} liters  = ${(
    inputValue.value * 0.264
  ).toFixed(3)} gallons  | ${inputValue.value} gallons  =${(
    inputValue.value * 3.78541
  ).toFixed(3)} liters `;

  massConversion.innerText = `${inputValue.value} kilos  = ${(
    inputValue.value * 2.204
  ).toFixed(3)} pounds | ${inputValue.value} pounds =${(
    inputValue.value * 0.453592
  ).toFixed(3)} kilos `;

  inputValue.value = "";
});
