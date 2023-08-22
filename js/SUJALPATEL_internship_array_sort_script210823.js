const alphabeticalButton = document.getElementById("alphabeticalButton");
const numericButton = document.getElementById("numericButton");
const outputDiv = document.getElementById("output");
const inputArrayField = document.getElementById("inputArray");

alphabeticalButton.addEventListener("click", function () {
  const inputData = getInputArray();
  if (inputData) {
    const sortedAlphabetically = inputData
      .slice()
      .sort((a, b) => a.toString().localeCompare(b.toString()));
    displayArray(sortedAlphabetically);
  }
});

numericButton.addEventListener("click", function () {
  const inputData = getInputArray();
  if (inputData) {
    const sortedNumerically = inputData.slice().sort((a, b) => a - b);
    displayArray(sortedNumerically);
  }
});

function getInputArray() {
  const input = inputArrayField.value.trim();
  if (input === "") {
    alert("Please enter numbers separated by commas.");
    return null;
  }
  const dataArray = input.split(",").map((item) => parseFloat(item));
  return dataArray;
}

function displayArray(arr) {
  outputDiv.innerHTML = arr.join(", ");
}
