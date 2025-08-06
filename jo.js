let value = 0;

function sendNumber() {
  const input = document.getElementById("numberInput").value;
  value = parseInt(input) || 0;
  updateDisplay();
}

function changeValue(amount) {
  value += amount;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("valueDisplay").innerText = value;
}
