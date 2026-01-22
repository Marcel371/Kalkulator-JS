const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let previousInput = "";
let operator = "";

// Event listener untuk semua tombol
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (button.classList.contains("dark")) {
      // angka atau titik
      currentInput += value;
      display.textContent = currentInput;
    } else if (button.classList.contains("operator")) {
      if (value === "=") {
        calculate();
      } else {
        operator = value;
        previousInput = currentInput;
        currentInput = "";
      }
    } else if (value === "AC") {
      clearAll();
    } else if (value === "+/-") {
      if (currentInput) {
        currentInput = String(parseFloat(currentInput) * -1);
        display.textContent = currentInput;
      }
    } else if (value === "%") {
      if (currentInput) {
        currentInput = String(parseFloat(currentInput) / 100);
        display.textContent = currentInput;
      }
    }
  });
});

// Fungsi hitung
function calculate() {
  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);
  let result;

  switch (operator) {
    case "+": result = prev + curr; break;
    case "−": result = prev - curr; break;   // simbol minus dari HTML
    case "×": result = prev * curr; break;   // simbol kali dari HTML
    case "÷": result = curr !== 0 ? prev / curr : "Error"; break; // simbol bagi dari HTML
    default: return;
  }

  display.textContent = result;
  currentInput = String(result);
  operator = "";
  previousInput = "";
}

// Fungsi reset
function clearAll() {
  currentInput = "";
  previousInput = "";
  operator = "";
  display.textContent = "0";
}
